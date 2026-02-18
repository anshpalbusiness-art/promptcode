import { TextAttributes, RGBA } from "@opentui/core"
import { For, type JSX } from "solid-js"
import { useTheme, tint } from "@tui/context/theme"
import { banner } from "@/cli/logo"
import stripAnsi from "strip-ansi"

export function Logo() {
  const { theme } = useTheme()

  const lines = banner.trim().split(/\r?\n/)
  // Filter out empty lines and ANSI escape codes for display
  const displayLines = lines.filter(line => stripAnsi(line).trim().length > 0)

  return (
    <box>
      <For each={displayLines}>
        {(line) => (
          <box flexDirection="row">
            <text fg={theme.text} attributes={TextAttributes.BOLD} selectable={false}>
              {stripAnsi(line)}
            </text>
          </box>
        )}
      </For>
    </box>
  )
}
