import type { SVGProps } from 'react';

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
            {...props}
        >
            <path
                fill="currentColor"
                d="M9.422 1.14a1 1 0 0 0-2 0v8.58a1.893 1.893 0 1 1-1.893-1.892a1 1 0 1 0 0-2a3.893 3.893 0 1 0 3.893 3.893V5.283a5.27 5.27 0 0 0 3.288 1.146a1 1 0 1 0 0-2a3.29 3.29 0 0 1-3.288-3.288Z"
            ></path>
        </svg>
    );
}