const elements = [
    {
        logoSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-500 [&>g]:opacity-100">
                    <g opacity="0.1">
                        <path
                            d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51473 2 7.50002 4.01472 7.50002 6.5C7.50002 8.98528 9.51473 11 12 11Z"
                            fill="currentColor"></path>
                        <path d="M12 19C10.3 19 9.00002 20.3 9.00002 22H15C15 20.3 13.7 19 12 19Z"
                              fill="currentColor"></path>
                        <path
                            d="M19.4 16.6L19.8 19.8C19.9 21 19 22 17.8 22H17C17 19.2 14.8 17 12 17C9.19999 17 6.99999 19.2 6.99999 22H6.19999C4.99999 22 4.09999 21 4.19999 19.8L4.6 16.6C4.8 14.5 6.6 13 8.6 13H15.4C17.5 13 19.2 14.6 19.4 16.6Z"
                            fill="currentColor"></path>
                    </g>
                </svg>,
        title: "Bli förare",
        description: "Tjäna pengar på dina egna villkor",
        arrowSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.71294 4.2968C9.32241 4.68749 9.32241 5.32092 9.71294 5.71161L16.002 12.0038L9.71294 18.296C9.32241 18.6867 9.32241 19.3201 9.71294 19.7108C10.1035 20.1015 10.7366 20.1015 11.1272 19.7108L17.4163 13.4186C18.1973 12.6372 18.1973 11.3704 17.4163 10.589L11.1272 4.2968C10.7366 3.90611 10.1035 3.90611 9.71294 4.2968Z"
                      fill="currentColor"></path>
            </svg>,
    },
        {
            logoSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                        <path
                            d="M7.59878 1.2968C7.20826 0.906275 6.5751 0.906275 6.18457 1.2968L2.64748 4.83389C2.25696 5.22441 2.25696 5.85758 2.64748 6.2481L6.18457 9.78519C6.5751 10.1757 7.20826 10.1757 7.59878 9.78519L11.1359 6.2481C11.5264 5.85758 11.5264 5.22441 11.1359 4.83389L7.59878 1.2968Z"
                            fill="currentColor"></path>
                        <path
                            d="M15.7201 7.1517C16.825 7.1517 17.7201 6.25648 17.7201 5.15131C17.7201 4.04614 16.825 3.1517 15.7201 3.1517C14.6159 3.1517 13.7201 4.04614 13.7201 5.15131C13.7201 6.25648 14.6159 7.1517 15.7201 7.1517Z"
                            fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.5 13.0009C3.01432 13.0009 1 15.0152 1 17.5009C1 19.9865 3.01432 22.0009 5.5 22.0009C7.98568 22.0009 10 19.9865 10 17.5009C10 15.0152 7.98568 13.0009 5.5 13.0009ZM3 17.5009C3 16.1197 4.11888 15.0009 5.5 15.0009C6.88112 15.0009 8 16.1197 8 17.5009C8 18.882 6.88112 20.0009 5.5 20.0009C4.11888 20.0009 3 18.882 3 17.5009Z"
                              fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M19.5 13.0009C17.0143 13.0009 15 15.0152 15 17.5009C15 19.9865 17.0143 22.0009 19.5 22.0009C21.9857 22.0009 24 19.9865 24 17.5009C24 15.0152 21.9857 13.0009 19.5 13.0009ZM17 17.5009C17 16.1197 18.1189 15.0009 19.5 15.0009C20.8811 15.0009 22 16.1197 22 17.5009C22 18.882 20.8811 20.0009 19.5 20.0009C18.1189 20.0009 17 18.882 17 17.5009Z"
                              fill="currentColor"></path>
                        <path
                            d="M17.697 11.448C18.3874 11.448 18.947 10.8883 18.947 10.198C18.947 9.50762 18.3874 8.94797 17.697 8.94797H15.6708L13.815 7.09221C13.3268 6.60406 12.5354 6.60406 12.0472 7.09221L9.21724 9.92219C8.33856 10.8009 8.33856 12.2255 9.21724 13.1042L11.2536 15.1406V19.0259C11.2536 19.7162 11.8133 20.2759 12.5036 20.2759C13.194 20.2759 13.7536 19.7162 13.7536 19.0259V14.6228C13.7536 14.2913 13.6219 13.9733 13.3875 13.7389L11.1618 11.5132L12.9311 9.74386L14.2691 11.0819C14.5035 11.3163 14.8215 11.448 15.153 11.448H17.697Z"
                            fill="currentColor"></path>
                    </svg>,
        title: "Bli kurir",
        description: "Leverera mat och få betalt varje vecka",
        arrowSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.71294 4.2968C9.32241 4.68749 9.32241 5.32092 9.71294 5.71161L16.002 12.0038L9.71294 18.296C9.32241 18.6867 9.32241 19.3201 9.71294 19.7108C10.1035 20.1015 10.7366 20.1015 11.1272 19.7108L17.4163 13.4186C18.1973 12.6372 18.1973 11.3704 17.4163 10.589L11.1272 4.2968C10.7366 3.90611 10.1035 3.90611 9.71294 4.2968Z"
                          fill="currentColor"></path>
                    </svg>,
    },
    {
        logoSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="text-green-500">
                        <path
                            d="M9 3C9 2.4 9.4 2 10 2C10.6 2 11 2.4 11 3V9.6C11 11.2 9.8 12.4 7.5 12.9V21C7.5 21.6 7.1 22 6.5 22C5.9 22 5.5 21.6 5.5 21V12.9C3.2 12.5 2 11.3 2 9.6V3C2 2.4 2.4 2 3 2C3.6 2 4 2.4 4 3V9.6C4 10.2 4.5 10.5 5.5 10.8V3C5.5 2.4 5.9 2 6.5 2C7.1 2 7.5 2.4 7.5 3V10.9C8.5 10.6 9 10.2 9 9.6V3Z"
                            fill="currentColor"></path>
                        <path
                            d="M20.4 2C21.2 2 22 2.6 22 3.4V21C22 21.6 21.6 22 21 22C20.4 22 20 21.6 20 21V16H16.1C14.4 16 14 14.7 14 14C14 13.3 14.7 7 18.9 2.6C18.9 2.6 19.4 2 20.4 2Z"
                            fill="currentColor"></path>
                 </svg>,
        title: "Lägg till restaurang eller butik",
        description: "Nå fler kunder och öka intäkterna",
        arrowSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.71294 4.2968C9.32241 4.68749 9.32241 5.32092 9.71294 5.71161L16.002 12.0038L9.71294 18.296C9.32241 18.6867 9.32241 19.3201 9.71294 19.7108C10.1035 20.1015 10.7366 20.1015 11.1272 19.7108L17.4163 13.4186C18.1973 12.6372 18.1973 11.3704 17.4163 10.589L11.1272 4.2968C10.7366 3.90611 10.1035 3.90611 9.71294 4.2968Z"
                          fill="currentColor">
                        </path>
                  </svg>,
    },
    {
        logoSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="text-green-500">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.00198 11.4348C2.00202 11.215 2.03828 10.9968 2.10932 10.7888L4.38527 4.12507C4.59909 3.49909 5.10861 3.01927 5.74634 2.84344C7.78389 2.28167 9.86995 2.00098 12.002 2.00098C14.1339 2.00098 16.2189 2.28163 18.2542 2.84342C18.8916 3.01931 19.4008 3.49886 19.6147 4.12445L21.8925 10.7883C21.9637 10.9966 22 11.2152 22 11.4352C22 14.2918 22 17.1461 22 20.001C22 21.1053 21.1043 22.001 20 22.001C18.8957 22.001 18 21.1053 18 20.001V18.8661C16.0251 19.2891 14.0247 19.501 12 19.501C9.9753 19.501 7.97494 19.2891 6 18.8661V20.001C6 21.1053 5.10429 22.001 4 22.001C2.89571 22.001 2 21.1053 2 20.001C2 17.1456 2.00148 14.2902 2.00198 11.4348ZM6.27791 4.77152C8.14056 4.25795 10.0478 4.00098 12.002 4.00098C13.9562 4.00098 15.8621 4.25793 17.7222 4.77136L19.5098 10.001H4.49182L6.27791 4.77152ZM5.5 16.0971C6.32843 16.0971 7 15.4255 7 14.5971C7 13.7687 6.32843 13.0971 5.5 13.0971C4.67157 13.0971 4 13.7687 4 14.5971C4 15.4255 4.67157 16.0971 5.5 16.0971ZM20 14.5971C20 15.4255 19.3284 16.0971 18.5 16.0971C17.6716 16.0971 17 15.4255 17 14.5971C17 13.7687 17.6716 13.0971 18.5 13.0971C19.3284 13.0971 20 13.7687 20 14.5971Z"
                              fill="currentColor">
                        </path>
                    </svg>,
        title: "Registrera dig som åkeriägare",
        description: "Lägg till ditt åkeri på Boltss plattform och öka dina intäkter",
        arrowSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.71294 4.2968C9.32241 4.68749 9.32241 5.32092 9.71294 5.71161L16.002 12.0038L9.71294 18.296C9.32241 18.6867 9.32241 19.3201 9.71294 19.7108C10.1035 20.1015 10.7366 20.1015 11.1272 19.7108L17.4163 13.4186C18.1973 12.6372 18.1973 11.3704 17.4163 10.589L11.1272 4.2968C10.7366 3.90611 10.1035 3.90611 9.71294 4.2968Z"
                          fill="currentColor">
                    </path>
                  </svg>,
    },
    {
        logoSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="text-green-500">
                        <g clipPath="url(#clip0_19491_1007)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7.5 4.49976C7.5 2.01447 9.51472 -0.000244141 12 -0.000244141C14.4853 -0.000244141 16.5 2.01447 16.5 4.49976V4.9998H20C21.1046 4.9998 22 5.89523 22 6.9998V10.1343C18.8547 11.5675 15.4726 12.443 12 12.443C8.52657 12.443 5.14627 11.5663 2 10.1343V6.9998C2 5.89523 2.89543 4.9998 4 4.9998H7.5V4.49976ZM14.5 4.49976V4.9998H9.5V4.49976C9.5 3.11904 10.6193 1.99976 12 1.99976C13.3807 1.99976 14.5 3.11904 14.5 4.49976Z"
                                  fill="currentColor"></path>
                            <path
                                d="M2 12.1603V18.9998C2 20.1044 2.89543 20.9998 4 20.9998H20C21.1046 20.9998 22 20.1044 22 18.9998V12.1605C18.8574 13.5295 15.4314 14.293 12 14.293C8.56821 14.293 5.14294 13.5292 2 12.1603Z"
                                fill="currentColor"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_19491_1007">
                                <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                 </svg>,
        title: "Bolt Business",
        description: "Bolts produkter och tjänster anpassade för ditt företag",
        arrowSvg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.71294 4.2968C9.32241 4.68749 9.32241 5.32092 9.71294 5.71161L16.002 12.0038L9.71294 18.296C9.32241 18.6867 9.32241 19.3201 9.71294 19.7108C10.1035 20.1015 10.7366 20.1015 11.1272 19.7108L17.4163 13.4186C18.1973 12.6372 18.1973 11.3704 17.4163 10.589L11.1272 4.2968C10.7366 3.90611 10.1035 3.90611 9.71294 4.2968Z"
                          fill="currentColor"></path>
                </svg>,
    },
]

export default elements