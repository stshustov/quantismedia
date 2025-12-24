import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

export default function AdminPanel() {
  const { user, isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || user?.role !== "admin")) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  const { data: users } = trpc.admin.getAllUsers.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  const { data: contacts } = trpc.contact.getAll.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated || user?.role !== "admin") return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
          
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="ideas">Trading Ideas</TabsTrigger>
              <TabsTrigger value="insights">Market Insights</TabsTrigger>
              <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
              <TabsTrigger value="legal">Legal Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">ID</th>
                          <th className="text-left p-2">Name</th>
                          <th className="text-left p-2">Email</th>
                          <th className="text-left p-2">Role</th>
                          <th className="text-left p-2">Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((u) => (
                          <tr key={u.id} className="border-b">
                            <td className="p-2">{u.id}</td>
                            <td className="p-2">{u.name}</td>
                            <td className="p-2">{u.email}</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                {u.role}
                              </span>
                            </td>
                            <td className="p-2 text-sm text-gray-600">
                              {new Date(u.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ideas">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Ideas Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Trading ideas management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Market Insights Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Market insights management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contacts?.map((contact) => (
                      <div key={contact.id} className="border rounded p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(contact.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p className="font-medium text-sm mb-2">{contact.subject}</p>
                        <p className="text-gray-700">{contact.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="legal">
              <Card>
                <CardHeader>
                  <CardTitle>Legal Pages Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Legal pages management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
