/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '../Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/gabrielreis354.png"
        className="h-10 w-10"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gabriel Reis
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          gabrielreiscunha6@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
