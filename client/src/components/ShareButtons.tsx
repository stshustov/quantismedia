import { Twitter as XIcon, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  
  const shareOnX = () => {
    const text = description || title;
    const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(fullUrl)}`;
    window.open(xUrl, '_blank', 'width=550,height=420');
  };
  
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
  };
  
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link. Please try again.");
    }
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnX}
        className="gap-2"
        title="Share on 𝕏"
      >
        <XIcon className="h-4 w-4" />
        <span className="hidden sm:inline">𝕏</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnLinkedIn}
        className="gap-2"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="gap-2"
        title="Copy link"
      >
        <LinkIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Copy</span>
      </Button>
    </div>
  );
}
