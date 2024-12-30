"use client";

import React from "react";
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
import { CalendarIcon, GlobeIcon, UsersIcon, LightbulbIcon, AwardIcon, BookOpenIcon } from "@heroicons/react";

export default function Layout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Context Menu */}
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex items-center justify-center h-32 w-32 border rounded-md cursor-pointer bg-white shadow-lg">
            Right-click Me
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-60 bg-white shadow-lg rounded-lg py-2 border">
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <CalendarIcon className="w-5 h-5 text-blue-500" />
            <span>Upcoming Events</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <UsersIcon className="w-5 h-5 text-blue-500" />
            <span>Networking</span>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger className="flex items-center justify-between space-x-2 px-3 py-2 hover:bg-blue-100">
              <div className="flex items-center space-x-2">
                <BookOpenIcon className="w-5 h-5 text-blue-500" />
                <span>Research Areas</span>
              </div>
              <span className="text-gray-500">&gt;</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-60 bg-white shadow-lg rounded-lg py-2 border">
              <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
                <span>Artificial Intelligence</span>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
                <span>Data Science</span>
              </ContextMenuItem>
              <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
                <span>Quantum Computing</span>
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <GlobeIcon className="w-5 h-5 text-blue-500" />
            <span>Global Initiatives</span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <LightbulbIcon className="w-5 h-5 text-blue-500" />
            <span>Innovation Challenges</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <AwardIcon className="w-5 h-5 text-blue-500" />
            <span>Awards & Recognition</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-100">
            <BookOpenIcon className="w-5 h-5 text-blue-500" />
            <span>Educational Resources</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
