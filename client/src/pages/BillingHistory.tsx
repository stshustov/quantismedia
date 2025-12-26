import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Receipt, 
  Download,
  CreditCard,
  Calendar,
  CheckCircle2
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BillingHistory() {
  const { user, loading, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user || !["core", "pro", "admin"].includes(user.role))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  const isPro = ["pro", "admin"].includes(user.role);

  const t = {
    title: language === "en" ? "Billing History" : "История платежей",
    subtitle: language === "en" 
      ? "View your payment history and download invoices"
      : "Просмотрите историю платежей и скачайте инвойсы",
    
    paymentMethod: {
      title: language === "en" ? "Payment Method" : "Способ оплаты",
      card: language === "en" ? "Card ending in" : "Карта, заканчивающаяся на",
      expires: language === "en" ? "Expires" : "Истекает",
      update: language === "en" ? "Update Payment Method" : "Обновить способ оплаты",
    },

    nextPayment: {
      title: language === "en" ? "Next Payment" : "Следующий платёж",
      date: language === "en" ? "Due Date" : "Дата платежа",
      amount: language === "en" ? "Amount" : "Сумма",
      plan: language === "en" ? "Plan" : "План",
    },

    history: {
      title: language === "en" ? "Payment History" : "История платежей",
      date: language === "en" ? "Date" : "Дата",
      description: language === "en" ? "Description" : "Описание",
      amount: language === "en" ? "Amount" : "Сумма",
      status: language === "en" ? "Status" : "Статус",
      invoice: language === "en" ? "Invoice" : "Инвойс",
      paid: language === "en" ? "Paid" : "Оплачено",
      pending: language === "en" ? "Pending" : "В ожидании",
      failed: language === "en" ? "Failed" : "Ошибка",
      download: language === "en" ? "Download" : "Скачать",
      noPayments: language === "en" ? "No payment history yet" : "История платежей пока пуста",
    },

    actions: {
      backToAccount: language === "en" ? "Back to Account" : "Назад в аккаунт",
    },
  };

  // Mock payment history data
  const payments = [
    {
      id: "INV-2024-001",
      date: new Date("2024-12-01"),
      description: language === "en" ? `${isPro ? "Pro" : "Core"} Plan - Monthly` : `План ${isPro ? "Pro" : "Core"} - Ежемесячно`,
      amount: isPro ? 89.00 : 39.00,
      status: "paid" as const,
    },
    {
      id: "INV-2024-002",
      date: new Date("2024-11-01"),
      description: language === "en" ? `${isPro ? "Pro" : "Core"} Plan - Monthly` : `План ${isPro ? "Pro" : "Core"} - Ежемесячно`,
      amount: isPro ? 89.00 : 39.00,
      status: "paid" as const,
    },
    {
      id: "INV-2024-003",
      date: new Date("2024-10-01"),
      description: language === "en" ? `${isPro ? "Pro" : "Core"} Plan - Monthly` : `План ${isPro ? "Pro" : "Core"} - Ежемесячно`,
      amount: isPro ? 89.00 : 39.00,
      status: "paid" as const,
    },
  ];

  const nextPaymentDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const handleUpdatePayment = () => {
    // TODO: Implement Paddle payment method update
    alert(language === "en"
      ? "Payment method update will be available after Paddle integration"
      : "Обновление способа оплаты будет доступно после интеграции Paddle");
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    // TODO: Implement invoice download via Paddle API
    alert(language === "en"
      ? `Invoice ${invoiceId} download will be available after Paddle integration`
      : `Скачивание инвойса ${invoiceId} будет доступно после интеграции Paddle`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t.paymentMethod.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.paymentMethod.card} 4242</p>
                    <p className="text-sm text-muted-foreground">{t.paymentMethod.expires} 12/2025</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={handleUpdatePayment}>
                  {t.paymentMethod.update}
                </Button>
              </CardContent>
            </Card>

            {/* Next Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {t.nextPayment.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.nextPayment.plan}</span>
                  <Badge variant={isPro ? "default" : "secondary"}>
                    {isPro ? "Pro" : "Core"}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.nextPayment.date}</span>
                  <span className="font-semibold">
                    {nextPaymentDate.toLocaleDateString(
                      language === "en" ? "en-US" : "ru-RU",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-muted-foreground">{t.nextPayment.amount}</span>
                  <span className="text-xl font-bold">${isPro ? "89.00" : "39.00"}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment History Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                {t.history.title}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "View and download your past invoices"
                  : "Просматривайте и скачивайте прошлые инвойсы"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {payments.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.history.date}</TableHead>
                      <TableHead>{t.history.description}</TableHead>
                      <TableHead className="text-right">{t.history.amount}</TableHead>
                      <TableHead>{t.history.status}</TableHead>
                      <TableHead className="text-right">{t.history.invoice}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>
                          {payment.date.toLocaleDateString(
                            language === "en" ? "en-US" : "ru-RU",
                            { month: "short", day: "numeric", year: "numeric" }
                          )}
                        </TableCell>
                        <TableCell>{payment.description}</TableCell>
                        <TableCell className="text-right font-semibold">
                          ${payment.amount.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={payment.status === "paid" ? "default" : "secondary"}
                            className="flex items-center gap-1 w-fit"
                          >
                            {payment.status === "paid" && <CheckCircle2 className="h-3 w-3" />}
                            {payment.status === "paid" ? t.history.paid : t.history.pending}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDownloadInvoice(payment.id)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            {t.history.download}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Receipt className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>{t.history.noPayments}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Back Button */}
          <Button variant="outline" onClick={() => setLocation("/account")}>
            {t.actions.backToAccount}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
