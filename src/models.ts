export type PushSubscriptionModel = {
	endpoint: string,
	expirationTime: number | null,
	p256dh_key: string,
	auth_key: string,
}
