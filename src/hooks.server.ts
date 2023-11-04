import { env } from "$env/dynamic/private";
import { setVapidDetails } from "web-push";

setVapidDetails("mailto:vgrechannik@gmail.com", env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY)
