import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Clock, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner"
import { Header } from "@/components/Header"
import { FooterSection } from "@/components/FooterSection"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredDateTime: z.object({
    date: z.date({
      required_error: "Please select a preferred date",
    }),
    time: z.string().min(1, "Please select a preferred time"),
  }),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      preferredDateTime: {
        date: undefined,
        time: "",
      },
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form submitted:", data)
    toast.success("Message sent successfully! I'll get back to you soon.")
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-800/40">
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-xl border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="h-12 bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="john@example.com" 
                              className="h-12 bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or idea..."
                              className="min-h-[140px] bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDateTime"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-200">Preferred Date & Time</FormLabel>
                          <div className="space-y-4">
                            {/* Date Selection */}
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 pl-3 text-left font-normal bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 hover:bg-slate-50 dark:hover:bg-slate-600/90 text-slate-900 dark:text-slate-100",
                                    !field.value?.date && "text-slate-500 dark:text-slate-400"
                                  )}
                                >
                                  {field.value?.date ? (
                                    format(field.value.date, "EEEE, MMMM dd, yyyy")
                                  ) : (
                                    <span>Select preferred date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-slate-200/60 dark:border-slate-700/60 z-50" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value?.date}
                                  onSelect={(date) => {
                                    field.onChange({
                                      ...field.value,
                                      date: date
                                    })
                                  }}
                                  disabled={(date) =>
                                    date < new Date()
                                  }
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>

                            {/* Time Selection */}
                            <div className="grid grid-cols-3 gap-2">
                              {/* Hour Selection */}
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Hour</label>
                                <select 
                                  className="w-full h-12 px-3 bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 rounded-md text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                                  value={field.value?.time ? field.value.time.split(':')[0] : ''}
                                  onChange={(e) => {
                                    const currentTime = field.value?.time || '12:00:AM'
                                    const timeParts = currentTime.split(':')
                                    const minutes = timeParts[1]?.split(':')[0] || '00'
                                    const period = currentTime.includes('PM') ? 'PM' : 'AM'
                                    field.onChange({
                                      ...field.value,
                                      time: `${e.target.value}:${minutes}:${period}`
                                    })
                                  }}
                                >
                                  <option value="">Hr</option>
                                  {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                                    <option key={hour} value={hour.toString().padStart(2, '0')}>
                                      {hour}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Minute Selection */}
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Minute</label>
                                <select 
                                  className="w-full h-12 px-3 bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 rounded-md text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                                  value={field.value?.time ? field.value.time.split(':')[1]?.split(':')[0] : ''}
                                  onChange={(e) => {
                                    const currentTime = field.value?.time || '12:00:AM'
                                    const hour = currentTime.split(':')[0] || '12'
                                    const period = currentTime.includes('PM') ? 'PM' : 'AM'
                                    field.onChange({
                                      ...field.value,
                                      time: `${hour}:${e.target.value}:${period}`
                                    })
                                  }}
                                >
                                  <option value="">Min</option>
                                  {Array.from({ length: 60 }, (_, i) => i).filter(min => min % 15 === 0).map(minute => (
                                    <option key={minute} value={minute.toString().padStart(2, '0')}>
                                      {minute.toString().padStart(2, '0')}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* AM/PM Selection */}
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Period</label>
                                <select 
                                  className="w-full h-12 px-3 bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 rounded-md text-slate-900 dark:text-slate-100 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                                  value={field.value?.time ? (field.value.time.includes('PM') ? 'PM' : 'AM') : ''}
                                  onChange={(e) => {
                                    const currentTime = field.value?.time || '12:00:AM'
                                    const timeParts = currentTime.split(':')
                                    const hour = timeParts[0] || '12'
                                    const minutes = timeParts[1]?.split(':')[0] || '00'
                                    field.onChange({
                                      ...field.value,
                                      time: `${hour}:${minutes}:${e.target.value}`
                                    })
                                  }}
                                >
                                  <option value="">--</option>
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                              </div>
                            </div>

                            {/* Display Selected Time */}
                            {field.value?.date && field.value?.time && (
                              <div className="mt-3 p-3 bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 rounded-lg">
                                <p className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  Selected: {format(field.value.date, "EEEE, MMMM dd, yyyy")} at {field.value.time.replace(':', ' ')}
                                </p>
                              </div>
                            )}
                          </div>
                          <FormMessage className="text-red-500 dark:text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-xl border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-0">
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-700/80 border border-slate-200/40 dark:border-slate-600/40 hover:bg-slate-100/80 dark:hover:bg-slate-700/100 transition-all duration-300">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl shadow-sm">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100 text-base">Email</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">hello@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-700/80 border border-slate-200/40 dark:border-slate-600/40 hover:bg-slate-100/80 dark:hover:bg-slate-700/100 transition-all duration-300">
                    <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-xl shadow-sm">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100 text-base">Phone</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-700/80 border border-slate-200/40 dark:border-slate-600/40 hover:bg-slate-100/80 dark:hover:bg-slate-700/100 transition-all duration-300">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl shadow-sm">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100 text-base">Location</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 dark:border-slate-600/60">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">
                      Connect with me on LinkedIn
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full h-12 bg-[#0077B5] hover:bg-[#005885] text-white border-[#0077B5] hover:border-[#005885] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      onClick={() => window.open('https://linkedin.com', '_blank')}
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200/60 dark:border-blue-800/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                    Response Time
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I typically respond to messages within 24 hours during business days. 
                    For urgent matters, feel free to reach out directly via phone or LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  )
}