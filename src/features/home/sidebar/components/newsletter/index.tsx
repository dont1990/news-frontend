"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "../../../../../components/shared/container";
import { useNewsletter } from "./hooks/useNewsletter";
import MailIcon from "./assets/mail";
import SparklesIcon from "./assets/sparkles";
import CheckCircleIcon from "./assets/check-circle";

export function Newsletter() {
  const { email, setEmail, isSubscribed, loading, error, subscribe } =
    useNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <section
      className="py-6 relative overflow-hidden rounded-2xl border border-border shadow"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-primary/5"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-500 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="w-5 h-5 text-white" />
              <span className="text-white font-medium">به‌روز بمانید</span>
            </div>

            <p className="text-5xl py-2 font-bold mb-6 bg-gradient-to-r from-primary-300 via-primary to-primary-300 bg-clip-text text-transparent">
              هرگز خبری را از دست ندهید
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              آخرین اخبار فوری، مصاحبه‌های اختصاصی و تحلیل‌های عمیق را مستقیماً
              هر صبح در ایمیل خود دریافت کنید.
            </p>
          </div>

          {/* Newsletter form */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/40 rounded-2xl p-6 animate-in zoom-in duration-500">
                <CheckCircleIcon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-white mb-2">
                  خوش آمدید!
                </p>
                <p className="text-primary-200">
                  اولین خبرنامه شما فردا صبح ارسال خواهد شد.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                {/* Input with icon */}
                <div className="relative">
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary size-6 z-[1]">
                    <MailIcon className="size-6" />
                  </div>
                  <Input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ps-9 py-4 text-lg bg-transparent border border-primary text-gray-700 ring ring-primary placeholder:text-gray-500 rounded-2xl focus:!ring-primary"
                    required
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full py-4 text-lg font-semibold hover:from-primary-600 hover:to-primary-600 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  {loading ? "در حال ثبت..." : "ثبت‌نام در خبرنامه"}
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-4">
              به جمع ۵۰,۰۰۰+ خواننده بپیوندید. امکان لغو اشتراک در هر زمان وجود
              دارد.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
