import Link from "next/link";

type TenantNameProps = {
  tenantName: string;
};
export default function TenantName({ tenantName }: TenantNameProps) {
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
            className="bg-purple font-semibold text-white py-2 rounded-md px-4"
          >
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
}
