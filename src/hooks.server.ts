import { env } from "$env/dynamic/private";
import web_push from "web-push";
const {setVapidDetails} = web_push;

setVapidDetails("mailto:vgrechannik@gmail.com", env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY)
