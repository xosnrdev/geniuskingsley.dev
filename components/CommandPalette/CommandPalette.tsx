'use client';

import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import CommandItem from './CommandItem';
import usePaletteOptions from './usePaletteOptions';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  const { pageOptions, blogOptions, generalOptions } = usePaletteOptions();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="General">
            {generalOptions.map(({ id, name, onSelect, icon }) => (
              <CommandItem
                id={id}
                key={id}
                name={name}
                icon={icon}
                setOpen={setOpen}
                onSelect={onSelect}
              />
            ))}
          </Command.Group>

          <Command.Group heading="Pages">
            {pageOptions.map(({ id, name, icon, onSelect }) => (
              <CommandItem
                id={id}
                key={id}
                name={name}
                icon={icon}
                setOpen={setOpen}
                onSelect={onSelect}
              />
            ))}
          </Command.Group>

          <Command.Group heading="Blogs">
            {blogOptions.map(({ id, name, onSelect, icon }) => (
              <CommandItem
                id={id}
                key={id}
                name={name}
                icon={icon}
                setOpen={setOpen}
                onSelect={onSelect}
              />
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
