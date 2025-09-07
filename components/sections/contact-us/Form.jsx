"use client";

import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message (you can replace this with a toast notification)
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-[#002b55] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-6 md:p-8 lg:p-10">
      <div className="mb-6 md:mb-8">
        <h2 className="text-white font-[500] text-[24px] md:text-[30px] lg:text-[38px]">
          Contact Us
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:gap-5"
      >
        <div>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Name must be less than 50 characters",
              },
            })}
            className={`h-[50px] md:h-[55px] lg:h-[60px] text-white bg-[#FFFFFF1A] w-full placeholder:text-[16px] md:placeholder:text-[18px] lg:placeholder:text-[20px] placeholder:font-[400] placeholder:text-white/70 p-4 md:p-5 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border transition-all duration-300 ${
              errors.name
                ? "border-red-400 focus:border-red-400"
                : "border-transparent focus:border-white/30"
            } focus:outline-none`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-400 text-[12px] md:text-[14px] mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            className={`h-[50px] md:h-[55px] lg:h-[60px] text-white bg-[#FFFFFF1A] w-full placeholder:text-[16px] md:placeholder:text-[18px] lg:placeholder:text-[20px] placeholder:font-[400] placeholder:text-white/70 p-4 md:p-5 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border transition-all duration-300 ${
              errors.email
                ? "border-red-400 focus:border-red-400"
                : "border-transparent focus:border-white/30"
            } focus:outline-none`}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-400 text-[12px] md:text-[14px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 500,
                message: "Message must be less than 500 characters",
              },
            })}
            className={`h-[80px] md:h-[90px] lg:h-[100px] text-white bg-[#FFFFFF1A] w-full placeholder:text-[16px] md:placeholder:text-[18px] lg:placeholder:text-[20px] placeholder:font-[400] placeholder:text-white/70 p-4 md:p-5 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border transition-all duration-300 resize-none ${
              errors.message
                ? "border-red-400 focus:border-red-400"
                : "border-transparent focus:border-white/30"
            } focus:outline-none`}
            placeholder="Your Message"
          />
          {errors.message && (
            <p className="text-red-400 text-[12px] md:text-[14px] mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            text={isSubmitting ? "Sending..." : "Submit"}
            size={"sm"}
            type="submit"
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};
