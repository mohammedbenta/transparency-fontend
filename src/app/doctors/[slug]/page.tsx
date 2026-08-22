import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctors, getDoctor } from "@/lib/content";
import { DoctorProfile } from "@/components/DoctorProfile";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};
  return {
    title: doctor.name.ar,
    description: doctor.bio.ar,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();
  return <DoctorProfile doctor={doctor} />;
}
