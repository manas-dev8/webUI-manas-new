import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  Users,
  Book,
  Globe,
  Lightbulb,
  Award,
  GraduationCap,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IEEE Student Branch, Galgotias University",
  description:
    "Official website of the IEEE Student Branch at Galgotias University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen`}
      >
        {/* Context Menu */}
        <ContextMenu>
          <ContextMenuTrigger>
            <Navbar />
            <main className=" bg-zinc-100">{children}</main>
            <Footer />
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-lg shadow-lg relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] before:opacity-30">
            {/* <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Users className="mr-2 h-4 w-4" />
              Societies
            </ContextMenuItem> */}
            <ContextMenuSub>
              <ContextMenuSubTrigger className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
                <Users className="mr-2 h-4 w-4" />
                Societies
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-md shadow-lg relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] before:opacity-30">
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Women in Engineering
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Industry Applications Society
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Computer Society
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Computational Intelligence Society
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Education Society
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Events
            </ContextMenuItem>
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Users className="mr-2 h-4 w-4" />
              Networking
            </ContextMenuItem>
            <ContextMenuSeparator className="bg-[#b3d9ff]" />
            <ContextMenuSub>
              <ContextMenuSubTrigger className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
                <Book className="mr-2 h-4 w-4" />
                Research Areas
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48 bg-gradient-to-br from-[#f0f8ff] to-[#e6f3ff] text-[#005580] rounded-md shadow-lg relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')] before:opacity-30">
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Artificial Intelligence
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Quantum Computing
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Cybersecurity
                </ContextMenuItem>
                <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors relative z-10">
                  Robotics
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Globe className="mr-2 h-4 w-4" />
              Global Initiatives
            </ContextMenuItem>
            <ContextMenuSeparator className="bg-[#b3d9ff]" />
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Lightbulb className="mr-2 h-4 w-4" />
              Innovation Challenges
            </ContextMenuItem>
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <Award className="mr-2 h-4 w-4" />
              Awards & Recognition
            </ContextMenuItem>
            <ContextMenuItem className="hover:bg-[#d9ecff] transition-colors flex items-center relative z-10">
              <GraduationCap className="mr-2 h-4 w-4" />
              Educational Resources
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </body>
    </html>
  );
}
