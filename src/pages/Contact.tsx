
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send the form data to your server
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <PageContainer className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center relative inline-block">
            Get in Touch
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Have a project in mind or just want to chat? Send me a message!
          </p>

          <PixelCard className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center">
                  <PixelButton type="submit">
                    <Send size={16} />
                    Send Message
                  </PixelButton>
                </div>
              </form>
            </Form>
          </PixelCard>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-3 w-12 h-12 flex items-center justify-center mx-auto bg-primary/10 rounded-lg">
                <span className="text-primary text-xl font-mono">@</span>
              </div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-muted-foreground">ch.varun1309@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="mb-3 w-12 h-12 flex items-center justify-center mx-auto bg-primary/10 rounded-lg">
                <span className="text-primary text-xl font-mono">⌂</span>
              </div>
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
            </div>
            <div className="text-center">
              <div className="mb-3 w-12 h-12 flex items-center justify-center mx-auto bg-primary/10 rounded-lg">
                <span className="text-primary text-xl font-mono">⚡</span>
              </div>
              <h3 className="text-lg font-medium mb-1">Social</h3>
              <p className="text-muted-foreground">LinkedIn / GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
