import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div
      class="rounded-xl bg-gray-800 sm:h-170 sm:w-120 my-4 xl:my-0 xl:mt-0 mx-auto w-11/12 xl:mr-0 flex flex-col justify-between"
    >
      <div
        class="w-full rounded-t-xl bg-no-repeat h-96"
        [style.background-image]="'url(../../../assets/header.webp)'"
      ></div>

      <div class="mx-4">
        <div class="flex flex-col items-center m-4">
          <h1 class="text-xl sm:text-3xl text-white font-bold">
            Miguel Moya Ortega
          </h1>
          <div class="text-gray-400 italic mt-4">Full Stack Developer</div>
        </div>
      </div>
      <div class="mx-4">
        <div class="flex text-gray-200 py-4 mb-8 justify-center xl: gap-8">
          <a
            href="https://github.com/miguelmoya1"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-200 hover:text-blue-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/miguelmo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-200 hover:text-blue-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="mailto:miguelmoyaortega@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-200 hover:text-blue-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 90 90"
            >
              <path
                d="M 45 42.768 l 45 -20.785 v -3.587 c 0 -3.186 -2.582 -5.768 -5.768 -5.768 H 5.768 C 2.582 12.627 0 15.209 0 18.395 v 3.587 L 45 42.768 z"
              />
              <path
                d="M 45 52.626 L 0 31.84 v 39.765 c 0 3.186 2.582 5.768 5.768 5.768 h 78.464 c 3.186 0 5.768 -2.582 5.768 -5.768 V 31.84 L 45 52.626 z"
              />
            </svg>
          </a>
          <a href="tel:+34646749570" rel="noopener noreferrer">
            <svg
              class="h-8 w-8 fill-current text-gray-200 hover:text-blue-500 transition"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 90 90"
            >
              <path
                d="M 38.789 51.211 l 10.876 10.876 c 0.974 0.974 2.471 1.194 3.684 0.543 l 13.034 -6.997 c 0.964 -0.518 2.129 -0.493 3.07 0.066 l 19.017 11.285 c 1.357 0.805 1.903 2.489 1.268 3.933 c -1.625 3.698 -4.583 10.476 -5.758 13.473 c -0.247 0.631 -0.615 1.209 -1.127 1.652 c -12.674 10.986 -37.89 -2.4 -57.191 -21.701 C 6.358 45.039 -7.028 19.823 3.958 7.149 c 0.444 -0.512 1.022 -0.88 1.652 -1.127 c 2.996 -1.175 9.775 -4.133 13.473 -5.758 c 1.444 -0.635 3.128 -0.089 3.933 1.268 l 11.285 19.017 c 0.558 0.941 0.583 2.106 0.066 3.07 L 27.37 36.651 c -0.651 1.213 -0.431 2.71 0.543 3.684 C 27.913 40.335 38.789 51.211 38.789 51.211 z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProfileComponent {}
