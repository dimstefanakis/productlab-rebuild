import { useState, useEffect, useRef } from "react";
import { Anton } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Image from "next/image";

const anton = Anton({ weight: "400", preload: false });

type Inputs = {
  inquiry_type: string;
  name: string;
  email: string;
  message: string;
};

const options = ["Business Inquiry", "Support"];

function GetInTouch() {
  const hiddenRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const isLargerThan768 = useMediaQuery("(min-width: 768px)");

  async function onSubmit(data: Inputs) {
    if (hiddenRef?.current?.value) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      toast.success(
        "Thank you for contacting us! We will get back to you shortly.",
      );
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full flex flex-col items-center" id="get-in-touch">
      <h2
        className={`${anton.className} text-4xl md:text-6xl w-full max-w-4xl text-center mt-12 md:mt-24`}
      >
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full max-w-2xl mt-8 space-y-4 flex flex-col items-center">
          <Select onValueChange={(value) => setValue("inquiry_type", value)}>
            <SelectTrigger className="w-full max-w-4xl mt-8">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem key={i} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="Name" {...register("name", { required: true })} />
          <Input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <Textarea
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <input
            ref={hiddenRef}
            type="hidden"
            name="subject"
            className="absolute left-0 top-0 opacity-0 h-0 w-0 -z-10"
          />
          <Button
            type="submit"
            className="w-max mt-6 py-6 rounded-full bg-[#3182ce] hover:bg-[#3182ce]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Contact Us"}
          </Button>
        </div>
      </form>
      <Image
        src={isLargerThan768 ? "/dots.png" : "/small-dots.png"}
        alt="dots"
        width={isLargerThan768 ? 800 : 400}
        height={isLargerThan768 ? 200 : 100}
        className="w-full my-8"
      />
    </div>
  );
}

export default GetInTouch;
