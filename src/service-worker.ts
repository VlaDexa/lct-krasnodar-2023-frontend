import type { NotificationData } from "./routes/api/sendNotificationToUser/+server";

declare global {
	interface Window {
		/** @link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting */
		skipWaiting(): Promise<undefined>;
		/** @link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/push_event */
		addEventListener(
			type: 'push',
			listener: (event: PushEvent) => ReturnTypeOrItself<Parameters<typeof addEventListener>[1]>,
			options?: Parameters<typeof addEventListener>[2]
		): ReturnType<typeof addEventListener>;
		/** @link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration */
		registration: ServiceWorkerRegistration;
	}
}

/** Constructs a type consisting of the return type of function T, if it's a function, otherwise returns T. */
type ReturnTypeOrItself<T> = T extends (...any: any[]) => any ? ReturnType<T> : T;

self.addEventListener('install', () => {
	self.skipWaiting();
});

// Polyfill ExtendableEvent
/** @link https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent */
interface ExtendableEvent extends Event {
	waitUntil(promise: Promise<any>): undefined;
}

/** @link https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData */
interface PushMessageData {
	arrayBuffer(): ArrayBuffer;
	blob(): Blob;
	/** @returns The result of parsing push event data as JSON. This could be anything that can be represented by JSON — an object, an array, a string, a number… */
	json(): any;
	text(): string;
}

// Polyfill PushEvent until it becomes available in typescript
/** @link https://developer.mozilla.org/en-US/docs/Web/API/PushEvent */
interface PushEvent extends ExtendableEvent {
	data: PushMessageData | null;
}

// Register event listener for the 'push' event.
self.addEventListener('push', (event: PushEvent) => {
	if (!event.data) return;
	const data: NotificationData = event.data.json();
	// Keep the service worker alive until the notification is created.
	event.waitUntil(
		// Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
		self.registration.showNotification(data.summary, {
			body: data.content,
			tag: 'server-message'
		})
	);
});
