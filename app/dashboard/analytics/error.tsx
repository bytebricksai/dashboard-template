'use client';

import { useEffect } from "react";
import ErrorChart from "@/components/analytics/ErrorCard";

interface ErrorProps {
    error: Error & {digest?: string};
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return <ErrorChart />
};
