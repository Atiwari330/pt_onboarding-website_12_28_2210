"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { StepProps } from "../types";

const formSchema = z.object({
  intakeProcess: z.string().min(1, "Please select current process"),
  otherIntakeProcess: z.string().optional(),
  challenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  otherChallenge: z.string().optional(),
  preferredTime: z.date({
    required_error: "Please select a preferred time",
  }),
});

const challenges = [
  { id: "wait-times", label: "Long patient wait times" },
  { id: "data-entry", label: "Manual data entry" },
  { id: "matching", label: "Provider matching complexity" },
  { id: "insurance", label: "Insurance verification delays" },
  { id: "other", label: "Other" },
];

export function StepTwo({ data, onUpdate, onNext, onBack, isLoading }: StepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      intakeProcess: data.intakeProcess,
      otherIntakeProcess: data.otherIntakeProcess,
      challenges: data.challenges,
      otherChallenge: data.otherChallenge,
      preferredTime: data.preferredTime || new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Help Us Customize Your Demo
          </h2>
          <p className="text-sm text-muted-foreground">
            We'll tailor the demonstration to your needs
          </p>
        </div>

        <FormField
          control={form.control}
          name="intakeProcess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Intake Process</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select process" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="paper">Paper forms</SelectItem>
                  <SelectItem value="digital">Basic digital forms</SelectItem>
                  <SelectItem value="emr">EMR system</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("intakeProcess") === "other" && (
          <FormField
            control={form.control}
            name="otherIntakeProcess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="challenges"
          render={() => (
            <FormItem>
              <FormLabel>Primary Challenges</FormLabel>
              <div className="space-y-2">
                {challenges.map((challenge) => (
                  <FormField
                    key={challenge.id}
                    control={form.control}
                    name="challenges"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={challenge.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(challenge.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, challenge.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== challenge.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {challenge.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("challenges")?.includes("other") && (
          <FormField
            control={form.control}
            name="otherChallenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="preferredTime"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Preferred Demo Time</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(Date.now() + 12096e5)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
          >
            Back
          </Button>
          <Button 
            type="submit"
            className="flex-1 bg-orange-600 hover:bg-orange-700"
            disabled={isLoading}
          >
            {isLoading ? "Scheduling..." : "Schedule Demo"}
          </Button>
        </div>
      </form>
    </Form>
  );
}