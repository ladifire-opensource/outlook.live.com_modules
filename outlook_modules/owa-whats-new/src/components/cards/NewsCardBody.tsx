import { whatsNew_Card_COVID19_Button } from '../../strings.locstring.json';
import loc from 'owa-localize';
import * as React from 'react';
import WhatsNewActionLink from '../WhatsNewActionLink';
import { logWhatsNewCardShown, logWhatsNewCardButtonClicked } from '../../utils/logDatapoint';
import type { WhatsNewCardIdentity } from '../../store/schema/WhatsNewCardIdentity';
import { getOwaResourceImageUrl } from 'owa-resource-url';
import { getIsDarkTheme } from 'owa-fabric-theme';

import owaNewsStyles from './NewsCard.scss';

interface NewsCardBodyProps {
    identity: WhatsNewCardIdentity;
    onGetUpdatesClicked: () => void;
    bodyText: string;
}

export default function OWANewsCard(props: NewsCardBodyProps): JSX.Element {
    React.useEffect(() => {
        logWhatsNewCardShown(props.identity);
    }, []);

    const onGetUpdatesClicked = React.useCallback(
        (evt: React.MouseEvent<unknown>) => {
            evt.stopPropagation();
            logWhatsNewCardButtonClicked(props.identity);
            props.onGetUpdatesClicked();
        },
        [props.identity, props.onGetUpdatesClicked]
    );

    return (
        <div className={owaNewsStyles.card} onClick={props.onGetUpdatesClicked}>
            <div>
                {getIsDarkTheme() ? (
                    <svg
                        role="presentation"
                        className={owaNewsStyles.image}
                        width="1603"
                        height="692"
                        viewBox="0 0 1603 692"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <rect width="1603" height="692" fill="#262F38" />
                            <path
                                opacity="0.4"
                                d="M1393.02 -301.762C1334.41 -292.829 1259.49 -297.937 1149.08 -248.082C976.923 -170.516 843.772 130.733 1224.44 257.335C1717.15 420.98 1437 901.153 1359.69 1018.37C1456.04 936.106 1536.49 832.576 1592.23 709.732C1752.69 355.708 1661.24 -48.5951 1393.02 -301.762Z"
                                fill="#585D62"
                            />
                            <path
                                opacity="0.4"
                                d="M954.47 438.089C959.879 156.428 649.284 177.05 515.327 211.5C381.37 245.951 186.36 347.546 141.323 194.117C113.956 99.5829 251.185 21.8734 406.359 -58.247C501.779 -107.659 515.549 -263.111 425.898 -350.305C379.627 -395.696 308.323 -400.395 236.427 -387.166C122.338 -292.776 34.5015 -164.235 -8.32246 -11.0103C-33.738 79.5369 -41.7901 170.564 -34.2128 258.716C62.0021 394.152 252.669 377.11 351.972 401.271C591.32 459.583 495.023 765.097 594.955 882.029C608.603 898.006 620.511 919.649 631.375 943.489C655.451 946.521 679.875 947.818 703.837 948.421C728.701 656.831 949.538 699.392 954.47 438.089Z"
                                fill="#585D62"
                            />
                            <path
                                opacity="0.4"
                                d="M-50.4999 485.5C-1.20425 583.003 -106.5 736.5 163.02 765.068C218.347 666.962 242.5 565.5 -50.4999 485.5Z"
                                fill="#585D62"
                            />
                            <circle
                                cx="1560.98"
                                cy="623.983"
                                r="22.8414"
                                transform="rotate(11.6484 1560.98 623.983)"
                                fill="#F9777E"
                                fill-opacity="0.6"
                            />
                            <circle
                                cx="98.2413"
                                cy="620.242"
                                r="57.7679"
                                transform="rotate(11.6484 98.2413 620.242)"
                                fill="#F03442"
                            />
                            <circle
                                cx="30.0108"
                                cy="657.011"
                                r="39.7954"
                                transform="rotate(11.6484 30.0108 657.011)"
                                fill="#FFADAB"
                                fill-opacity="0.4"
                            />
                            <circle
                                cx="168.499"
                                cy="61.4992"
                                r="15.6599"
                                transform="rotate(11.6484 168.499 61.4992)"
                                fill="#F9777E"
                            />
                            <circle
                                opacity="0.8"
                                cx="1361.78"
                                cy="130.779"
                                r="120.865"
                                transform="rotate(11.6484 1361.78 130.779)"
                                fill="#F03442"
                            />
                            <circle
                                cx="253.212"
                                cy="284.212"
                                r="166.943"
                                transform="rotate(11.6484 253.212 284.212)"
                                fill="#F03442"
                                fill-opacity="0.5"
                            />
                            <circle
                                cx="1217.24"
                                cy="75.2421"
                                r="63.6937"
                                transform="rotate(11.6484 1217.24 75.2421)"
                                fill="#FF7A84"
                                fill-opacity="0.7"
                            />
                            <circle
                                cx="822.276"
                                cy="366.213"
                                r="26.4225"
                                transform="rotate(11.6484 822.276 366.213)"
                                fill="#F9777E"
                            />
                            <path
                                opacity="0.7"
                                d="M533.165 627.609C585.229 627.609 627.435 585.858 627.435 534.357C627.435 482.856 585.229 441.105 533.165 441.105C481.1 441.105 438.894 482.856 438.894 534.357C438.894 585.858 481.1 627.609 533.165 627.609Z"
                                fill="#F9777E"
                            />
                            <path
                                d="M325.243 362.716C358.02 362.716 384.591 336.362 384.591 303.854C384.591 271.345 358.02 244.992 325.243 244.992C292.466 244.992 265.895 271.345 265.895 303.854C265.895 336.362 292.466 362.716 325.243 362.716Z"
                                fill="#F9777E"
                                fill-opacity="0.6"
                            />
                            <path
                                d="M483.226 510.407C511.088 510.407 533.674 487.821 533.674 459.96C533.674 432.098 511.088 409.512 483.226 409.512C455.365 409.512 432.779 432.098 432.779 459.96C432.779 487.821 455.365 510.407 483.226 510.407Z"
                                fill="#F03442"
                                fill-opacity="0.5"
                            />
                            <path
                                d="M649.894 213.795C661.905 213.795 671.641 204.059 671.641 192.048C671.641 180.038 661.905 170.302 649.894 170.302C637.884 170.302 628.148 180.038 628.148 192.048C628.148 204.059 637.884 213.795 649.894 213.795Z"
                                fill="#F2B9B9"
                                fill-opacity="0.56"
                            />
                            <path
                                d="M688.583 342.249C730.235 342.249 764 308.483 764 266.832C764 225.18 730.235 191.415 688.583 191.415C646.932 191.415 613.167 225.18 613.167 266.832C613.167 308.483 646.932 342.249 688.583 342.249Z"
                                fill="#F9777E"
                                fill-opacity="0.28"
                            />
                            <path
                                d="M520.5 371C524.396 371 528.159 371.509 531.789 372.527C535.419 373.546 538.806 374.962 541.949 376.777C545.092 378.593 547.948 380.806 550.516 383.418C553.083 386.03 555.297 388.908 557.156 392.051C559.016 395.194 560.454 398.581 561.473 402.211C562.491 405.841 563 409.604 563 413.5C563 416.555 562.646 419.454 561.938 422.199C561.229 424.944 560.167 427.711 558.75 430.5L521.554 504.892C521.12 505.761 519.88 505.761 519.446 504.892L482.25 430.5C480.878 427.755 479.837 425.01 479.129 422.266C478.421 419.521 478.044 416.599 478 413.5C478 409.604 478.509 405.841 479.527 402.211C480.546 398.581 481.962 395.194 483.777 392.051C485.592 388.908 487.806 386.052 490.418 383.484C493.03 380.917 495.908 378.703 499.051 376.844C502.194 374.984 505.581 373.546 509.211 372.527C512.841 371.509 516.604 371 520.5 371ZM520.5 430.5C522.846 430.5 525.038 430.057 527.074 429.172C529.111 428.287 530.926 427.069 532.52 425.52C534.113 423.97 535.331 422.177 536.172 420.141C537.013 418.104 537.456 415.891 537.5 413.5C537.5 411.154 537.057 408.962 536.172 406.926C535.286 404.889 534.069 403.074 532.52 401.481C530.97 399.887 529.177 398.669 527.141 397.828C525.104 396.987 522.891 396.544 520.5 396.5C518.154 396.5 515.962 396.943 513.926 397.828C511.889 398.714 510.074 399.931 508.48 401.481C506.887 403.03 505.669 404.823 504.828 406.859C503.987 408.896 503.544 411.109 503.5 413.5C503.5 415.846 503.943 418.038 504.828 420.074C505.714 422.111 506.931 423.926 508.48 425.52C510.03 427.113 511.823 428.331 513.859 429.172C515.896 430.013 518.109 430.456 520.5 430.5Z"
                                fill="#C1C4C6"
                            />
                            <path
                                d="M329.5 182C332.387 182 335.177 182.378 337.867 183.134C340.558 183.891 343.068 184.943 345.398 186.291C347.727 187.639 349.844 189.282 351.747 191.222C353.65 193.162 355.291 195.299 356.669 197.633C358.047 199.968 359.113 202.483 359.868 205.179C360.623 207.875 361 210.669 361 213.563C361 215.831 360.738 217.985 360.213 220.023C359.688 222.061 358.9 224.116 357.85 226.188L330.554 280.887C330.12 281.757 328.88 281.757 328.446 280.887L301.15 226.188C300.133 224.149 299.362 222.111 298.837 220.072C298.312 218.034 298.033 215.864 298 213.563C298 210.669 298.377 207.875 299.132 205.179C299.887 202.483 300.937 199.968 302.282 197.633C303.627 195.299 305.268 193.178 307.204 191.272C309.14 189.365 311.273 187.721 313.602 186.34C315.932 184.959 318.442 183.891 321.133 183.134C323.823 182.378 326.612 182 329.5 182ZM329.5 226.188C331.239 226.188 332.863 225.859 334.373 225.201C335.882 224.544 337.227 223.64 338.409 222.489C339.59 221.338 340.492 220.007 341.116 218.494C341.739 216.982 342.067 215.338 342.1 213.563C342.1 211.82 341.772 210.193 341.116 208.68C340.459 207.168 339.557 205.82 338.409 204.636C337.26 203.453 335.931 202.549 334.422 201.924C332.912 201.299 331.272 200.97 329.5 200.938C327.761 200.938 326.137 201.266 324.627 201.924C323.118 202.581 321.773 203.486 320.591 204.636C319.41 205.787 318.508 207.119 317.884 208.631C317.261 210.143 316.933 211.787 316.9 213.563C316.9 215.305 317.228 216.933 317.884 218.445C318.541 219.957 319.443 221.305 320.591 222.489C321.74 223.672 323.069 224.577 324.578 225.201C326.087 225.826 327.728 226.155 329.5 226.188Z"
                                fill="#ADB0B2"
                            />
                            <path
                                d="M599.409 282.119C631.211 282.119 656.991 256.567 656.991 225.047C656.991 193.527 631.211 167.975 599.409 167.975C567.608 167.975 541.828 193.527 541.828 225.047C541.828 256.567 567.608 282.119 599.409 282.119Z"
                                fill="#F03442"
                                fill-opacity="0.5"
                            />
                            <path
                                d="M699.007 262.672C751.095 226.641 893.378 178.442 1045.8 273.893C1115.47 328.868 1178.76 449.625 1283.07 477.495C1391.79 506.545 1474.61 450.982 1462.74 408.877"
                                stroke="#D7D6D5"
                                stroke-width="15"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-dasharray="0.05 30"
                            />
                            <g filter="url(#filter0_d)">
                                <path
                                    d="M1311.46 312.539L1324.43 315.075C1331.36 316.554 1336.05 323.511 1334.57 330.441L1287.57 562.192C1286.09 569.123 1279.13 573.811 1272.2 572.331C1265.27 570.852 1260.58 563.895 1262.06 556.965L1311.46 312.539Z"
                                    fill="#9CA2A9"
                                />
                                <path
                                    d="M1278.21 279.269C1285.14 280.749 1289.83 287.705 1288.35 294.636L1246.56 567.4L1267.13 598.274L958.424 535.743C937.196 531.459 923.428 510.731 927.711 489.502L979.646 232.104C981.126 225.174 988.082 220.486 995.013 221.965L1278.21 279.269Z"
                                    fill="#D7DADC"
                                    stroke="#A29E9A"
                                    stroke-width="0.028977"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M1313.37 567.562C1309.09 588.79 1288.36 602.559 1267.13 598.275C1245.9 593.992 1232.14 573.263 1236.42 552.035L1288.35 294.637L1301.33 297.173C1308.26 298.652 1312.94 305.609 1311.46 312.539L1262.07 556.966C1260.59 563.896 1265.27 570.853 1272.2 572.332C1279.13 573.812 1286.09 569.124 1287.57 562.193L1334.51 330.8L1347.7 333.415C1354.63 334.895 1359.32 341.851 1357.84 348.782L1313.37 567.562Z"
                                    fill="#C4C8CB"
                                />
                                <rect
                                    x="1131.74"
                                    y="360.102"
                                    width="111.469"
                                    height="20.9381"
                                    transform="rotate(11.4437 1131.74 360.102)"
                                    fill="#7B7D80"
                                />
                                <rect
                                    x="1122.59"
                                    y="405.329"
                                    width="111.469"
                                    height="20.9381"
                                    transform="rotate(11.4437 1122.59 405.329)"
                                    fill="#7B7D80"
                                />
                                <rect
                                    x="1113.43"
                                    y="450.556"
                                    width="111.469"
                                    height="20.9381"
                                    transform="rotate(11.4437 1113.43 450.556)"
                                    fill="#7B7D80"
                                />
                                <rect
                                    x="1104.27"
                                    y="495.783"
                                    width="83.3005"
                                    height="20.9381"
                                    transform="rotate(11.4437 1104.27 495.783)"
                                    fill="#7B7D80"
                                />
                                <rect
                                    x="1009.07"
                                    y="269.419"
                                    width="249.691"
                                    height="31.5031"
                                    transform="rotate(11.4437 1009.07 269.419)"
                                    fill="#F03442"
                                />
                                <rect
                                    x="996.268"
                                    y="332.677"
                                    width="102.112"
                                    height="159.373"
                                    transform="rotate(11.4437 996.268 332.677)"
                                    fill="#F9777E"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="915.325"
                                y="211.535"
                                width="454.381"
                                height="400.56"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="1.44885" />
                                <feGaussianBlur stdDeviation="5.7954" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                            <clipPath id="clip0">
                                <path d="M0 0H1603V692H0V0Z" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                ) : (
                    <img
                        role="presentation"
                        className={owaNewsStyles.image}
                        src={getOwaResourceImageUrl('WhatsNew-Covid19.png')}
                    />
                )}
                <div tabIndex={0}>{props.bodyText}</div>
            </div>
            <WhatsNewActionLink
                onClick={onGetUpdatesClicked}
                whatsNewCardIdentity={props.identity}
                whatsNewActionText={loc(whatsNew_Card_COVID19_Button)}
            />
        </div>
    );
}