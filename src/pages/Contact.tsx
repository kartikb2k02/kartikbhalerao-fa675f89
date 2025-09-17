import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { DateTimePicker } from "@/components/ui/date-time-picker";
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredDateTime: z.date({
    required_error: "Please select a preferred date and time"
  })
});
type FormData = z.infer<typeof formSchema>;
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      preferredDateTime: undefined
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-800/40">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-slate-200/40 dark:border-slate-700/40 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-slate-700/50 dark:via-slate-600/30 dark:to-slate-700/50 px-8 py-8 border-b border-slate-200/50 dark:border-slate-600/50">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  I'd love to hear about your project ideas and discuss how we can bring them to life together.
                </CardDescription>
              </div>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="fullName" render={({
                      field
                    }) => <FormItem className="space-y-3">
                            <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" className="h-12 bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 rounded-xl transition-all duration-200" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 dark:text-red-400 text-sm" />
                          </FormItem>} />

                      <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem className="space-y-3">
                            <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" className="h-12 bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 rounded-xl transition-all duration-200" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 dark:text-red-400 text-sm" />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem className="space-y-3">
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                            Project Details
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me about your project vision, goals, timeline, and any specific requirements you have in mind..." className="min-h-[160px] bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 resize-none rounded-xl transition-all duration-200" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400 text-sm" />
                        </FormItem>} />

                    <FormField control={form.control} name="preferredDateTime" render={({
                    field
                  }) => <FormItem className="space-y-3">
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                            Preferred Meeting Time
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DateTimePicker 
                                date={field.value} 
                                onDateChange={field.onChange} 
                                placeholder="When would you like to discuss your project?" 
                                className="h-12 bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 rounded-xl transition-all duration-200"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400 text-sm" />
                        </FormItem>} />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {isSubmitting ? (
                          <div className="flex items-center gap-3 relative z-10">
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending your message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 relative z-10">
                            <Send className="h-6 w-6" />
                            <span>Send Message & Schedule Meeting</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              

            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>;
}