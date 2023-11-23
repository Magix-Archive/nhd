import { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,tsx,ts}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                "xp-blue": "#245edc",
                "xp-other": "#0e8be8",
                "xp-accent": "#408ce5",
                "xp-beige": "#aca899",
                "gray": "#2c2f33",
                "lite": "#f0f0f0",
                "light-gray": "#4c5259",
                "really-gray": "#888788",
                "skype-blue": "#377eee",
                "skype-light-blue": "#b5dde7",
                "skype-sender": "#def7fd",
                "skype-receiver": "#b7eefd",
                "whatsapp-gray": "#adafaf",
                "whatsapp-white": "#eeeeee",
                "whatsapp-semi-white": "#fefefe",
                "whatsapp-tan": "#e6dfd7",
                "whatsapp-green": "#dcf8c6",
                "whatsapp-light-gray": "#f5f1ee",
                "slack-dark-purple": "#2b092b",
                "slack-purple": "#3e103f",
                "slack-divider": "#4c224d",
                "light-black": "#111111",
                "discord-black": "#202225",
                "discord-dark-black": "#1e1f22",
                "discord-gray": "#949ba4",
                "discord-gray-3": "#37393f",
                "discord-gray-2": "#2f3136",
                "discord-gray-4": "#7b7f84",
                "discord-gray-5": "#42464e",
                "discord-gray-6": "#40444b",
                "discord-gray-7": "#8f9197",
                "discord-gray-8": "#292b2f",
                "discord-gray-9": "#b9bbbe"
            }
        }
    },
    darkMode: ["class", '[data-mode="dark"]'],
    plugins: []
} as Config;
