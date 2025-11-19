import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2 } from 'lucide-react';

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted/40 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="border-0 shadow-lg text-center">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-primary">Check your email</CardTitle>
            <CardDescription>
              We&apos;ve sent you a confirmation link. Please check your email to verify your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Once verified, you can log in to access your dashboard.
              </p>
              <Button asChild className="w-full h-11 text-base">
                <Link href="/auth/login">Return to Login</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
