"use client";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type TenantNameProps = {
  tenantName: string;
};
export default function TenantName({ tenantName }: TenantNameProps) {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    });
    return () => subscription.unsubscribe();
  }, [router, supabase.auth]);

  return (
    <header className="mb-4">
      <div className="py-8">
        <div className="flex justify-between">
          <div className="font-bold text-2xl flex space-x-4">
            <Link href={"/tickets"}>
              <span className="font-wagner">{tenantName}</span>
            </Link>
          </div>

          <Link
            role="button"
            href="/logout"
            prefetch={false}
            className="bg-purple font-semibold text-white py-2 rounded-md px-4"
            onClick={(event) => {
              event.preventDefault();
              supabase.auth.signOut();
            }}
          >
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
}
