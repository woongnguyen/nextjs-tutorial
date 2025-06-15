"use client";

export default function ErrorBoundary({ error }: {
    error: Error
}) {
    return <h6>{error.message}</h6>
}