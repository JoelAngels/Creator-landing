import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import profileImage from "@/public/images/veg-back.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { SectionHeader } from "@/components/SectionHeader";

const socialMedia = [
  {
    Icon: FaInstagram,
    color: "text-white",
    followers: "914K",
    bg: "bg-gradient-to-r from-fuchsia-400 via-teal-400 to-emerald-300",
  },
  {
    Icon: FaXTwitter,
    color: "text-white",
    followers: "123.4K",
    bg: "bg-gradient-to-r from-fuchsia-400 via-teal-400 to-emerald-300",
  },
  {
    Icon: FaYoutube,
    color: "text-white",
    followers: "2.5M",
    bg: "bg-gradient-to-r from-fuchsia-400 via-teal-400 to-emerald-300",
  },
];

export default function ProfilePage() {
  return (
    <>
      <div className="py-6">
        <SectionHeader
          eyebrow="Product Preview"
          description="🎨 Tailor your media kit to align perfectly with your personal or business brand."
        />
      </div>
      <div className="container mx-auto relative w-full  bg-black rounded-xl">
        {/* Background Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src={profileImage}
            alt="Tropical sunset background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content Overlay */}
        <div className="relative z-10 p-8 text-white md:-mt-[300px]">
          <div className="mx-auto max-w-6xl pb-32 hidden md:block">
            {/* Stat Boxes */}
            <div className="absolute left-0 top-60 -translate-x-3/4 transform">
              <div className="rounded-xl bg-white px-6 py-8 shadow-lg z-30 w-[280px] text-center">
                <h3 className="text-sm font-medium text-gray-600">
                  Average Retweet Per Tweet
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">40,884</p>
              </div>
            </div>

            <div className="absolute right-0 bottom-32 translate-x-1/2 transform">
              <div className="rounded-xl bg-white px-6 py-8 shadow-lg z-30 w-[280px] text-center">
                <h3 className="text-sm font-medium text-gray-600">
                  Total Subscribers
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">4.17M</p>
              </div>
            </div>

            <div className="absolute bottom-32 left-0 -translate-x-3/4 transform">
              <div className="rounded-xl bg-white px-6 py-8 shadow-lg z-30 w-[280px] text-center">
                <h3 className="text-sm font-medium text-gray-600">
                  Engagement Rate
                </h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">95%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-0 translate-x-1/2 transform hidden md:block">
          <div className="rounded-xl bg-white px-6 py-8 shadow-lg z-30 w-[280px] text-center">
            <h3 className="text-sm font-medium text-gray-600">
              Media Kit Views
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">125,184</p>
          </div>
        </div>

        <div className="relative z-10 p-8 text-white -mt-[300px]">
          <div className="mx-auto max-w-6xl pb-32">
            {/* Profile Section */}

            <div className="space-y-6 mt-[12rem]">
              {/* Profile Image */}
              <div className="h-24 w-24 overflow-hidden rounded-full bg-[#e88d7d]">
                <Image
                  src="/placeholder.svg"
                  alt="Profile picture"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Name and Location */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold">Karl The Dev</h1>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span>New York, United States of America</span>
                </div>
              </div>
              {/* Tags */}
              <div className="flex gap-3">
                <span className="rounded-full bg-white/10 px-4 py-1">
                  Branding
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1">
                  Design
                </span>
              </div>
              {/* Intro Section */}
              <div className="max-w-2xl space-y-2">
                <h2 className="text-2xl font-semibold">Short intro about me</h2>
                <p className="text-white">
                  Lucas is a social media influencer with over 3 Million
                  followers, trusted in design industry, and dedicated to
                  inspiring and educating young audience
                </p>
              </div>
              {/* Social Stats */}
              {/* <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-white p-3 rounded-full">
                  <Instagram className="h-5 w-5 text-pink-400" />
                </div>
                <span className="font-semibold">914K</span>
              </div>
              <div className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">123.4K</span>
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-red-500" />
                <span className="font-semibold">2.5M</span>
              </div>
            </div> */}
              <div className="flex gap-6">
                {socialMedia.map(({ Icon, color, followers, bg }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`p-3 rounded-full ${bg}`}>
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <span className="font-semibold">{followers}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="hidden md:block absolute right-8 bottom-[15rem]  max-w-md space-y-4 bg-black p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold">Let's work together</h2>
              <p className="text-white/80">
                Contact me to learn more about how we can work together to
                elevate your brand.
              </p>
              <button className="w-full rounded-lg bg-gradient-to-r from-fuchsia-400 via-teal-400 to-emerald-300 px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
                Book me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
