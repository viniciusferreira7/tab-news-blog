'use client'

import React from 'react'
import * as AvatarRadix from '@radix-ui/react-avatar'

export function Avatar() {
  return (
    <AvatarRadix.Root>
      <AvatarRadix.AvatarImage
        className="w-[5.5rem] h-[5.5rem] rounded-full object-cover"
        src="https://github.com/viniciusferreira7.png"
        alt="Foto de perfil do Vinicius"
      />
      <AvatarRadix.Fallback
        className="text-sky-950 text-lg font-sans font-extrabold"
        delayMs={600}
      >
        VF
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
