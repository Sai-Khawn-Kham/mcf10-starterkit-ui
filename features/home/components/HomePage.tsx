"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  return (
    <section className="bg-neutral-900 min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div></div>
          <Link
            href="/dashboard"
            className="bg-neutral-900 text-neutral-100 border border-neutral-700 mb-8 px-4 py-2 text-sm"
          >
            Dashboard
          </Link>
        </div>

        <Card className="border border-neutral-700 bg-neutral-800 w-full">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row w-full min-h-[400px]">
              <div className="w-full md:w-[500px] px-6 py-12 md:py-20 md:pl-28">
                <h1 className="text-neutral-100 font-bold">
                  Let's get started
                </h1>
                <p className="text-neutral-500 mt-2 mb-5">
                  Laravel has an incredibly rich ecosystem.
                  <br />
                  We suggest starting with the following.
                </p>
                <div className="mb-7">
                  <div className="flex items-start gap-5 mb-3">
                    <div className="relative h-6 w-6">
                      <Badge
                        className="h-6 w-6 p-0 border border-muted-foreground rounded-full bg-transparent absolute inset-0"
                        variant="outline"
                      />
                      <Badge className="h-2 w-2 p-0 bg-neutral-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex items-center gap-1">
                      <h3 className="text-neutral-100 font-bold">Read the</h3>
                      <span className="text-orange-500 underline">
                        Documentation
                      </span>
                      <ArrowUpRight className="size-4 text-orange-500" />
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="relative h-6 w-6">
                      <Badge
                        className="h-6 w-6 p-0 border border-muted-foreground rounded-full bg-transparent absolute inset-0"
                        variant="outline"
                      />
                      <Badge className="h-2 w-2 p-0 bg-neutral-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h3 className="text-neutral-100 font-bold">
                      Watch video tutorials at
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 pl-12">
                    <h3 className="text-orange-500 underline">Laracasts</h3>
                    <ArrowUpRight className="size-4 text-orange-500 mt-0.5" />
                  </div>
                </div>
                <Button className="bg-neutral-100 text-neutral-800">
                  Deploy now
                </Button>
              </div>

              <div className="flex-1 bg-orange-500 flex items-center justify-center min-h-[200px] md:min-h-full">
                Image
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HomePage;
