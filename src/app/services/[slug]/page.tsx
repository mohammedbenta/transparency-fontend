import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";
import { ServiceDetail } from "@/components/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name.ar} | ${service.name.en}`,
    description: service.summary.ar,
    openGraph: {
      title: service.name.ar,
      description: service.summary.ar,
      images: [{ url: service.image, alt: service.imageAlt.ar }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
