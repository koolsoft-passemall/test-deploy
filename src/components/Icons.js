import SvgIcon from '@material-ui/core/SvgIcon';
const Youtube = ({ color = "#E07730" }) => {
    return (
        <SvgIcon style={{ height: "35", width: "35", marginRight: "16px" }} viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83501 0 0 7.83502 0 17.5C0 27.165 7.83501 35 17.5 35Z" fill="white" />
            <path d="M28.5849 14.7071C28.5849 12.0886 26.4464 9.9502 23.828 9.9502H11.5213C8.90281 9.9502 6.7644 12.0886 6.7644 14.7071V20.4677C6.7644 23.0861 8.90281 25.2245 11.5213 25.2245H23.828C26.4464 25.2245 28.5849 23.0861 28.5849 20.4677V14.7071ZM20.7731 17.8928L15.8417 20.5986C15.6235 20.7295 15.4489 20.5549 15.4489 20.3367V14.7507C15.4489 14.4888 15.6671 14.3579 15.8417 14.4888L20.7731 17.3255C21.035 17.4564 20.9913 17.7619 20.7731 17.8928Z" fill={color} />
        </SvgIcon>
    )
}
const TotalQuestions = ({ color = "#E07730" }) => {
    return (
        <SvgIcon style={{ width: "79", height: "79" }} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.0872" cy="39.7729" r="38.9869" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M31.4726 23.0206H46.7019C48.3771 23.0206 49.7477 24.3913 49.7477 26.0665V53.4791C49.7477 55.1544 48.3771 56.525 46.7019 56.525H31.4726C29.7974 56.525 28.4268 55.1544 28.4268 53.4791V26.0665C28.4268 24.3913 29.7974 23.0206 31.4726 23.0206ZM31.4726 50.4333H46.7019V29.1123H31.4726V50.4333ZM37.5643 45.8645H40.6102V48.9104H37.5643V45.8645ZM35.5084 37.0163H35.3104C34.4119 37.0163 33.757 36.133 34.0616 35.2802C34.8535 32.9653 37.1684 31.4272 39.8639 31.7774C42.2245 32.082 44.1129 34.0466 44.4023 36.4071C44.675 38.5891 43.4841 39.65 42.3397 40.6697C41.6309 41.3012 40.9399 41.9168 40.6254 42.773C40.5036 43.0775 40.4427 43.4126 40.4427 43.7933H37.7623C37.7623 43.1537 37.8537 42.6207 38.006 42.1486C38.006 42.1333 38.006 42.1029 38.0212 42.0724C38.0212 42.0501 38.0294 42.036 38.0397 42.0181C38.0435 42.0115 38.0476 42.0044 38.0517 41.9963C38.143 41.7526 38.2344 41.5242 38.3562 41.311H38.3715C38.8432 40.5015 39.5149 39.9694 40.1366 39.477C41.0004 38.7929 41.7676 38.1852 41.7676 37.0163C41.7676 35.6 40.5188 34.3512 39.1025 34.3512C37.9603 34.3512 36.9399 35.1431 36.5744 36.1939C36.4069 36.666 36.0109 37.0163 35.5084 37.0163Z" fill="white" />
        </SvgIcon>
    )

}
const FreeCircle = ({ color = "#E07730" }) => {
    return (
        <SvgIcon style={{ width: "79", height: "79" }} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.4441" cy="39.4444" r="39.1111" fill={color} />
            <path d="M20.8373 37.3711C20.5307 37.3711 20.264 37.2644 20.0373 37.0511C19.8107 36.8244 19.6973 36.5578 19.6973 36.2511C19.6973 35.9444 19.8107 35.6778 20.0373 35.4511C20.264 35.2244 20.5307 35.1111 20.8373 35.1111H21.7373C21.844 35.1111 21.8973 35.0511 21.8973 34.9311V34.5711C21.8973 33.0911 22.2307 32.0111 22.8973 31.3311C23.5773 30.6511 24.6373 30.3111 26.0773 30.3111C26.544 30.3111 26.9573 30.3378 27.3173 30.3911C27.6373 30.4311 27.904 30.5844 28.1173 30.8511C28.3307 31.1178 28.4373 31.4178 28.4373 31.7511V31.8111C28.4373 32.0911 28.324 32.3177 28.0973 32.4911C27.8707 32.6511 27.6173 32.7111 27.3373 32.6711C27.2307 32.6578 27.0773 32.6511 26.8773 32.6511C26.224 32.6511 25.784 32.7778 25.5573 33.0311C25.344 33.2844 25.2373 33.7911 25.2373 34.5511V34.9311C25.2373 35.0511 25.2973 35.1111 25.4173 35.1111H27.0973C27.404 35.1111 27.6707 35.2244 27.8973 35.4511C28.124 35.6778 28.2373 35.9444 28.2373 36.2511C28.2373 36.5578 28.124 36.8244 27.8973 37.0511C27.6707 37.2644 27.404 37.3711 27.0973 37.3711H25.4173C25.2973 37.3711 25.2373 37.4311 25.2373 37.5511V43.9711C25.2373 44.2778 25.124 44.5444 24.8973 44.7711C24.6707 44.9978 24.404 45.1111 24.0973 45.1111H23.0373C22.7307 45.1111 22.464 44.9978 22.2373 44.7711C22.0107 44.5444 21.8973 44.2778 21.8973 43.9711V37.5511C21.8973 37.4311 21.844 37.3711 21.7373 37.3711H20.8373ZM31.0908 45.1111C30.7841 45.1111 30.5174 44.9978 30.2908 44.7711C30.0774 44.5444 29.9708 44.2778 29.9708 43.9711V35.8511C29.9708 35.5444 30.0774 35.2778 30.2908 35.0511C30.5174 34.8244 30.7841 34.7111 31.0908 34.7111H32.0708C32.3774 34.7111 32.6374 34.8244 32.8508 35.0511C33.0774 35.2778 33.1908 35.5444 33.1908 35.8511V36.6911C33.1908 36.7044 33.1974 36.7111 33.2108 36.7111C33.2374 36.7111 33.2508 36.7044 33.2508 36.6911C34.0774 35.5844 35.2308 34.9378 36.7108 34.7511C37.0174 34.7111 37.2774 34.8044 37.4908 35.0311C37.7174 35.2578 37.8308 35.5311 37.8308 35.8511V36.0111C37.8308 36.3178 37.7174 36.5844 37.4908 36.8111C37.2774 37.0378 37.0108 37.1644 36.6908 37.1911C35.6108 37.3111 34.7708 37.6844 34.1708 38.3111C33.5841 38.9244 33.2908 39.7244 33.2908 40.7111V43.9711C33.2908 44.2778 33.1774 44.5444 32.9508 44.7711C32.7374 44.9978 32.4774 45.1111 32.1708 45.1111H31.0908ZM43.7378 36.6911C43.1378 36.6911 42.6845 36.8511 42.3778 37.1711C42.0711 37.4778 41.8778 38.0111 41.7978 38.7711C41.7978 38.8778 41.8445 38.9311 41.9378 38.9311H45.3178C45.4378 38.9311 45.4978 38.8711 45.4978 38.7511C45.4445 37.3778 44.8578 36.6911 43.7378 36.6911ZM44.2378 45.3111C42.4245 45.3111 41.0245 44.8511 40.0378 43.9311C39.0645 43.0111 38.5778 41.6711 38.5778 39.9111C38.5778 38.1644 39.0111 36.8311 39.8778 35.9111C40.7578 34.9778 42.0245 34.5111 43.6778 34.5111C46.8511 34.5111 48.4645 36.2444 48.5178 39.7111C48.5178 40.0311 48.3911 40.3044 48.1378 40.5311C47.8978 40.7444 47.6178 40.8511 47.2978 40.8511H41.9578C41.8245 40.8511 41.7711 40.9111 41.7978 41.0311C41.9045 41.7644 42.1845 42.2911 42.6378 42.6111C43.1045 42.9178 43.7978 43.0711 44.7178 43.0711C45.3178 43.0711 45.9645 42.9844 46.6578 42.8111C46.9378 42.7444 47.1845 42.7978 47.3978 42.9711C47.6245 43.1444 47.7378 43.3711 47.7378 43.6511V43.6911C47.7378 44.0244 47.6311 44.3311 47.4178 44.6111C47.2178 44.8778 46.9578 45.0378 46.6378 45.0911C45.8645 45.2378 45.0645 45.3111 44.2378 45.3111ZM54.8222 36.6911C54.2222 36.6911 53.7689 36.8511 53.4622 37.1711C53.1555 37.4778 52.9622 38.0111 52.8822 38.7711C52.8822 38.8778 52.9289 38.9311 53.0222 38.9311H56.4022C56.5222 38.9311 56.5822 38.8711 56.5822 38.7511C56.5289 37.3778 55.9422 36.6911 54.8222 36.6911ZM55.3222 45.3111C53.5089 45.3111 52.1089 44.8511 51.1222 43.9311C50.1489 43.0111 49.6622 41.6711 49.6622 39.9111C49.6622 38.1644 50.0955 36.8311 50.9622 35.9111C51.8422 34.9778 53.1089 34.5111 54.7622 34.5111C57.9355 34.5111 59.5489 36.2444 59.6022 39.7111C59.6022 40.0311 59.4755 40.3044 59.2222 40.5311C58.9822 40.7444 58.7022 40.8511 58.3822 40.8511H53.0422C52.9089 40.8511 52.8555 40.9111 52.8822 41.0311C52.9889 41.7644 53.2689 42.2911 53.7222 42.6111C54.1889 42.9178 54.8822 43.0711 55.8022 43.0711C56.4022 43.0711 57.0489 42.9844 57.7422 42.8111C58.0222 42.7444 58.2689 42.7978 58.4822 42.9711C58.7089 43.1444 58.8222 43.3711 58.8222 43.6511V43.6911C58.8222 44.0244 58.7155 44.3311 58.5022 44.6111C58.3022 44.8778 58.0422 45.0378 57.7222 45.0911C56.9489 45.2378 56.1489 45.3111 55.3222 45.3111Z" fill="white" />
        </SvgIcon>
    )
}
const PeopleIcon = ({ color = "#E07730" }) => {
    return (
        <SvgIcon style={{ width: "79", height: "79" }} viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="39.711" cy="39.4444" r="39.1111" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.4748 34.0972C40.4748 37.0458 38.0762 39.4444 35.1276 39.4444C32.1789 39.4444 29.7803 37.0458 29.7803 34.0972C29.7803 31.1486 32.1789 28.7499 35.1276 28.7499C38.0762 28.7499 40.4748 31.1486 40.4748 34.0972ZM37.4192 34.0972C37.4192 32.8291 36.3956 31.8055 35.1276 31.8055C33.8595 31.8055 32.8359 32.8291 32.8359 34.0972C32.8359 35.3652 33.8595 36.3888 35.1276 36.3888C36.3956 36.3888 37.4192 35.3652 37.4192 34.0972ZM35.1276 42.118C31.5526 42.118 24.4331 43.9055 24.4331 47.4652V48.6111C24.4331 49.4513 25.1206 50.1388 25.9609 50.1388H44.2942C45.1345 50.1388 45.822 49.4513 45.822 48.6111V47.4652C45.822 43.9055 38.7026 42.118 35.1276 42.118ZM35.1275 45.1735C32.3928 45.1735 29.2914 46.1972 28.0081 47.0833H42.247C40.9637 46.1972 37.8623 45.1735 35.1275 45.1735ZM45.8831 42.2097C47.6553 43.493 48.8776 45.2041 48.8776 47.4653V50.1389H53.4609C54.3012 50.1389 54.9887 49.4514 54.9887 48.6111V47.4653C54.9887 44.3791 49.6414 42.6222 45.8831 42.2097ZM49.6414 34.0972C49.6414 37.0458 47.2428 39.4444 44.2942 39.4444C43.4692 39.4444 42.7053 39.2458 42.0026 38.9097C42.965 37.5499 43.5303 35.8847 43.5303 34.0972C43.5303 32.3097 42.965 30.6444 42.0026 29.2847C42.7053 28.9486 43.4692 28.7499 44.2942 28.7499C47.2428 28.7499 49.6414 31.1486 49.6414 34.0972Z" fill="white" />
        </SvgIcon>

    )
}
const Clock = ({ color = "#E07730" }) => {
    return (
        <SvgIcon style={{ width: "80", height: "80" }} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.6846" cy="40.2751" r="39.4497" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M39.6693 24.8649C31.163 24.8649 24.2747 31.7686 24.2747 40.275C24.2747 48.7813 31.163 55.685 39.6693 55.685C48.1911 55.685 55.0948 48.7813 55.0948 40.275C55.0948 31.7686 48.1911 24.8649 39.6693 24.8649ZM39.6847 52.603C32.8735 52.603 27.3567 47.0862 27.3567 40.275C27.3567 33.4637 32.8735 27.9469 39.6847 27.9469C46.496 27.9469 52.0128 33.4637 52.0128 40.275C52.0128 47.0862 46.496 52.603 39.6847 52.603ZM39.2532 32.57H39.3457C39.9621 32.57 40.4552 33.0631 40.4552 33.6795V40.6756L46.4189 44.22C46.9583 44.5282 47.1278 45.2216 46.8042 45.7456C46.496 46.2695 45.8179 46.4236 45.294 46.1154L38.8988 42.2783C38.4211 42.0009 38.1437 41.4924 38.1437 40.953V33.6795C38.1437 33.0631 38.6368 32.57 39.2532 32.57Z" fill="white" />
        </SvgIcon>

    )
}
const TwitterFooter = ({ color = "#4E63BD" }) => {
    return (
        <SvgIcon style={{ width: "35", height: "35", marginRight: "16px" }} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="white" />
            <path d="M24.1271 9.20203C23.5286 9.46387 22.8927 9.6135 22.2568 9.72572C22.5561 9.68831 23.0049 9.12721 23.192 8.90278C23.4538 8.56612 23.6783 8.19205 23.8279 7.78058C23.8279 7.74317 23.8653 7.70577 23.8279 7.66836C23.7905 7.66836 23.7531 7.66836 23.7157 7.66836C23.0049 8.04243 22.2942 8.30427 21.5087 8.52871C21.4339 8.52871 21.3965 8.52871 21.359 8.4913C21.2842 8.41649 21.2468 8.34168 21.172 8.30427C20.8354 8.04243 20.4987 7.81799 20.0872 7.63095C19.5635 7.40652 19.0024 7.3317 18.4413 7.36911C17.8802 7.40652 17.3566 7.55614 16.8703 7.81799C16.384 8.07983 15.9351 8.41649 15.5984 8.86537C15.2244 9.31425 14.9625 9.83794 14.8503 10.3616C14.7381 10.8853 14.7381 11.409 14.8129 11.9701C14.8129 12.0449 14.8129 12.0823 14.7381 12.0449C11.7082 11.596 9.16453 10.5113 7.10718 8.15465C7.03236 8.04243 6.95755 8.04243 6.88274 8.15465C5.98498 9.50128 6.43386 11.6709 7.55605 12.7182C7.70568 12.8679 7.85531 13.0175 8.04234 13.1297C7.96753 13.1297 7.2194 13.0549 6.58349 12.7182C6.50867 12.6434 6.43386 12.6808 6.43386 12.7931C6.43386 12.9427 6.43386 13.0549 6.47127 13.2419C6.6583 14.5886 7.59346 15.8604 8.86528 16.3467C9.01491 16.4215 9.20194 16.4589 9.35157 16.4963C9.05231 16.5711 8.75306 16.6085 7.89271 16.5337C7.78049 16.4963 7.74309 16.5711 7.78049 16.6833C8.4164 18.404 9.80044 18.9277 10.8104 19.227C10.96 19.2644 11.0723 19.2644 11.2219 19.3018C11.2219 19.3018 11.2219 19.3018 11.1845 19.3392C10.8478 19.8629 9.65082 20.2369 9.12713 20.424C8.11715 20.7606 7.03236 20.9477 5.98498 20.8354C5.79795 20.798 5.79795 20.798 5.72314 20.8354C5.68573 20.8729 5.72314 20.9103 5.76054 20.9477C5.98498 21.0973 6.20942 21.2095 6.39645 21.3217C7.06977 21.6584 7.78049 21.9576 8.49122 22.1447C12.2693 23.1921 16.5336 22.4065 19.3391 19.601C21.5835 17.394 22.3316 14.3267 22.3316 11.2968C22.3316 11.1846 22.4812 11.1098 22.5561 11.0349C23.1172 10.5861 23.6034 10.0624 24.0149 9.50128C24.1271 9.38906 24.0897 9.23943 24.0897 9.20203C24.2019 9.16462 24.2019 9.16462 24.1271 9.20203Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.8204 22.5561C11.8204 22.5186 12.1579 22.5561 11.8204 22.5561C11.8204 22.5186 11.8579 22.5561 11.8204 22.5561Z" fill="black" />
        </SvgIcon>

    )
}
const FacebookFooter = ({ color = "#4E63BD" }) => {
    return (
        <SvgIcon style={{ width: "35", height: "35", marginRight: "16px" }} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.4938 15.0749V24.2768C12.4938 24.4265 12.606 24.5013 12.7182 24.5013H16.1222C16.2718 24.5013 16.3466 24.3891 16.3466 24.2768V14.9252H18.8155C18.9277 14.9252 19.0399 14.813 19.0399 14.7008L19.2643 11.8953C19.2643 11.7457 19.1521 11.6334 19.0399 11.6334H16.3466V9.65091C16.3466 9.16462 16.7207 8.79056 17.207 8.79056H19.1147C19.2643 8.79056 19.3392 8.67834 19.3392 8.56612V5.76063C19.3392 5.61101 19.2269 5.53619 19.1147 5.53619H15.8978C13.99 5.53619 12.4564 7.06986 12.4564 8.97759V11.7083H10.7357C10.586 11.7083 10.5112 11.8205 10.5112 11.9327V14.7382C10.5112 14.8878 10.6234 14.9626 10.7357 14.9626H12.4564V15.0749H12.4938Z" fill={color} />
        </SvgIcon>
    )
}
const InstaFooter = ({ color = "#4E63BD" }) => {
    return (
        <SvgIcon style={{ width: "35", height: "35", marginRight: "16px" }} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83501 0 0 7.83502 0 17.5C0 27.165 7.83501 35 17.5 35Z" fill="white" />
            <path d="M23.6969 12.7868C24.444 12.7868 25.0497 12.1811 25.0497 11.4339C25.0497 10.6868 24.444 10.0811 23.6969 10.0811C22.9497 10.0811 22.344 10.6868 22.344 11.4339C22.344 12.1811 22.9497 12.7868 23.6969 12.7868Z" fill={color} />
            <path d="M17.6308 11.783C14.4886 11.783 11.9138 14.3578 11.9138 17.4999C11.9138 20.6421 14.4886 23.2169 17.6308 23.2169C20.7729 23.2169 23.3477 20.6421 23.3477 17.4999C23.3477 14.3578 20.8166 11.783 17.6308 11.783ZM17.6308 21.1658C15.6233 21.1658 13.9649 19.5074 13.9649 17.4999C13.9649 15.4924 15.6233 13.8341 17.6308 13.8341C19.6383 13.8341 21.2966 15.4924 21.2966 17.4999C21.2966 19.551 19.6819 21.1658 17.6308 21.1658Z" fill={color} />
            <path d="M22.1695 29.1086H12.9176C9.0772 29.1086 5.93506 25.9664 5.93506 22.126V12.8741C5.93506 9.03375 9.0772 5.8916 12.9176 5.8916H22.1695C26.0099 5.8916 29.152 9.03375 29.152 12.8741V22.126C29.152 25.9664 26.0099 29.1086 22.1695 29.1086ZM12.9176 8.11729C10.2991 8.11729 8.1171 10.2557 8.1171 12.9178V22.1697C8.1171 24.7881 10.2555 26.9702 12.9176 26.9702H22.1695C24.7879 26.9702 26.97 24.8318 26.97 22.1697V12.8741C26.97 10.2557 24.8316 8.07365 22.1695 8.07365H12.9176V8.11729Z" fill={color} />
        </SvgIcon>

    )
}
const GmailFooter = ({ color = "#4E63BD", margin }) => {
    return (
        <SvgIcon style={{ width: "35", height: "35", marginRight: margin === false ? "" : "16px" }} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83501 0 0 7.83502 0 17.5C0 27.165 7.83501 35 17.5 35Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9 10H25C26.1 10 27 10.9 27 12V24C27 25.1 26.1 26 25 26H9C7.9 26 7 25.1 7 24L7.01 12C7.01 10.9 7.9 10 9 10ZM17.53 18.67L24.6 14.25C24.85 14.09 25 13.82 25 13.53C25 12.86 24.27 12.46 23.7 12.81L17 17L10.3 12.81C9.73 12.46 9 12.86 9 13.53C9 13.82 9.15 14.09 9.4 14.25L16.47 18.67C16.79 18.87 17.21 18.87 17.53 18.67Z" fill={color} />
        </SvgIcon>
    )
}
const FreeIcon = ({ color }) => {
    return (
        <SvgIcon style={{ width: "80", height: "80" }} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M39.9705 62.0718L18.3314 72.8804C16.6973 73.7674 14.6589 73.1752 13.7449 71.5478C13.4779 71.0362 13.3368 70.4675 13.3333 69.8895V45.696C13.3333 48.0947 14.6857 49.5753 18.2432 51.2336L39.9705 62.0718Z" fill={color} />
            <path d="M50.2314 6.66675H29.6508C20.6541 6.66675 13.3333 10.2203 13.3333 19.3113V45.6961C13.3333 48.0947 14.6857 49.5753 18.2432 51.2336L39.9705 62.0718L61.5802 72.8804C62.3759 73.3411 63.3232 73.4561 64.2048 73.1993C65.0864 72.9424 65.8264 72.3356 66.255 71.5182C66.5217 71.0172 66.663 70.4581 66.6666 69.8896V19.3113C66.5784 10.2203 59.2575 6.66675 50.2314 6.66675Z" fill={color} />
            <path d="M27.7881 35.9114C28.3447 35.9114 28.6729 35.5715 28.6729 34.9915V32.4719H31.4561C31.9189 32.4719 32.2119 32.2083 32.2119 31.7688C32.2119 31.3352 31.9131 31.0715 31.4561 31.0715H28.6729V28.8098H31.7432C32.2236 28.8098 32.5459 28.5344 32.5459 28.0774C32.5459 27.6204 32.2295 27.345 31.7432 27.345H27.7881C27.2314 27.345 26.9033 27.6848 26.9033 28.2649V34.9915C26.9033 35.5715 27.2314 35.9114 27.7881 35.9114ZM34.374 35.9231C34.9307 35.9231 35.2588 35.5833 35.2588 35.0032V32.7063H36.7646L38.1709 35.2551C38.458 35.7708 38.6514 35.9231 39.0732 35.9231C39.5889 35.9231 39.9639 35.5833 39.9639 35.1145C39.9639 34.9094 39.9229 34.7571 39.7764 34.5051L38.5576 32.3958C39.4893 31.9973 40.0107 31.095 40.0107 30.0403C40.0107 28.3704 38.8975 27.345 36.9521 27.345H34.374C33.8174 27.345 33.4893 27.6848 33.4893 28.2649V35.0032C33.4893 35.5833 33.8232 35.9231 34.374 35.9231ZM35.2588 31.4231V28.7278H36.7646C37.6436 28.7278 38.1943 29.2551 38.1943 30.0754C38.1943 30.9133 37.6729 31.4231 36.7822 31.4231H35.2588ZM42.0615 35.8H46.0811C46.5674 35.8 46.8838 35.5247 46.8838 35.0676C46.8838 34.6106 46.5615 34.3352 46.0811 34.3352H42.9463V32.2024H45.9287C46.374 32.2024 46.667 31.9446 46.667 31.5227C46.667 31.1008 46.3682 30.843 45.9287 30.843H42.9463V28.8098H46.0811C46.5615 28.8098 46.8838 28.5344 46.8838 28.0774C46.8838 27.6204 46.5674 27.345 46.0811 27.345H42.0615C41.5049 27.345 41.1768 27.6848 41.1768 28.2649V34.8743C41.1768 35.4602 41.5049 35.8 42.0615 35.8ZM48.9404 35.8H52.96C53.4463 35.8 53.7627 35.5247 53.7627 35.0676C53.7627 34.6106 53.4404 34.3352 52.96 34.3352H49.8252V32.2024H52.8076C53.2529 32.2024 53.5459 31.9446 53.5459 31.5227C53.5459 31.1008 53.2471 30.843 52.8076 30.843H49.8252V28.8098H52.96C53.4404 28.8098 53.7627 28.5344 53.7627 28.0774C53.7627 27.6204 53.4463 27.345 52.96 27.345H48.9404C48.3838 27.345 48.0557 27.6848 48.0557 28.2649V34.8743C48.0557 35.4602 48.3838 35.8 48.9404 35.8Z" fill="white" />
        </SvgIcon>

    )
}
const LoginIcon = ({ color }) => {
    return (
        <SvgIcon style={{ width: "64", height: "68" }} viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M16.3206 15.4867C16.3206 7.31675 23.1865 0.666748 31.6253 0.666748H48.3997C56.8178 0.666748 63.6666 7.30008 63.6666 15.4534V52.5068C63.6666 60.6801 56.8041 67.3334 48.3653 67.3334H31.5909C23.1728 67.3334 16.3206 60.6968 16.3206 52.5401V49.4067V15.4867Z" fill={color} />
            <path d="M45.4579 32.1795L35.5649 22.4828C34.5424 21.4828 32.8969 21.4828 31.8779 22.4895C30.8621 23.4961 30.8655 25.1195 31.8846 26.1195L37.3017 31.4295H2.94024C1.50132 31.4295 0.333252 32.5795 0.333252 33.9995C0.333252 35.4161 1.50132 36.5628 2.94024 36.5628H37.3017L31.8846 41.8761C30.8655 42.8761 30.8621 44.4995 31.8779 45.5061C32.3891 46.0095 33.0561 46.2628 33.7264 46.2628C34.39 46.2628 35.057 46.0095 35.5649 45.5128L45.4579 35.8161C45.9488 35.3328 46.2265 34.6795 46.2265 33.9995C46.2265 33.3161 45.9488 32.6628 45.4579 32.1795Z" fill={color} />
        </SvgIcon>

    )
}
const PenIcon = ({ color }) => {
    return (
        <SvgIcon style={{ width: "68", height: "68" }} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M49.5479 67.2991H18.4497C13.6279 67.5988 8.89277 65.9272 5.32975 62.6705C2.07308 59.1042 0.401453 54.3691 0.701146 49.5507V18.4495C0.401453 13.6311 2.06975 8.89602 5.32642 5.3297C8.89277 2.07306 13.6279 0.401455 18.4497 0.701146H49.5479C54.363 0.401455 59.0948 2.06973 62.6578 5.32637C65.9111 8.89602 67.5861 13.6278 67.2997 18.4495V49.5507C67.5961 54.3691 65.9278 59.1042 62.6711 62.6705C59.1048 65.9272 54.3696 67.5988 49.5479 67.2991Z" fill={color} />
            <path d="M50.8486 28.6586L29.006 50.6098C27.87 51.7155 26.3771 52.3334 24.8192 52.3334H17.1922C16.7702 52.3334 16.3808 52.1708 16.0887 51.8781C15.7966 51.5854 15.6667 51.1952 15.6667 50.7724L15.8615 43.0651C15.8939 41.5367 16.5106 40.1058 17.5816 39.0326L33.0629 23.5204C33.3226 23.2602 33.777 23.2602 34.0366 23.5204L39.4664 28.9285C39.8234 29.283 40.3427 29.5139 40.8945 29.5139C42.0953 29.5139 43.0365 28.5383 43.0365 27.3676C43.0365 26.7822 42.8093 26.2619 42.4523 25.8716C42.355 25.7415 37.1848 20.5936 37.1848 20.5936C36.8602 20.2684 36.8602 19.7155 37.1848 19.3903L39.3593 17.1789C41.3716 15.1627 44.6171 15.1627 46.6294 17.1789L50.8486 21.4066C52.8284 23.3903 52.8284 26.6424 50.8486 28.6586Z" fill={color} />
        </SvgIcon>

    )
}
const TumblrIcon = ({ color, bgColor }) => {
    return (
        <SvgIcon style={{ width: "35", height: "35", marginRight: '16px' }} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Tumblr">
                <g id="Tumblr_2">
                    <rect id="Rectangle" width="48" height="48" rx="24" fill={bgColor ? bgColor : "#FFFFFF"} />
                    <path id="Path" d="M25.8221 29.5755C25.8221 31.7505 26.9249 32.4858 28.6405 32.4858H31.1218V38H26.4348C22.2378 38 19.0825 35.8249 19.0825 30.6477V22.3457H15.2531V17.8424C19.4501 16.7396 21.2269 13.1247 21.4413 10H25.8221V17.1379H30.9074V22.3457H25.8221V29.5755Z" fill={color ? color : "black"} />
                </g>
            </g>
        </SvgIcon>
    )
}
const LinkedInFooter = ({ color }) => {
    return (
        <SvgIcon width="35px" height="35px" style={{ width: "35", height: "35", marginRight: '16px' }} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9606 30C6.69291 30 0 23.3071 0 15.0394C0 6.69291 6.69291 0 14.9606 0C23.2283 0 29.9213 6.69291 29.9213 14.9606C30 23.2283 23.2283 30 14.9606 30Z" fill="white"/>
        <path d="M11.2598 11.6535H8.18896V21.6535H11.2598V11.6535Z" fill={color ? color : "black"}/>
        <path d="M9.76378 10.315C10.764 10.315 11.5748 9.50414 11.5748 8.50394C11.5748 7.50374 10.764 6.69292 9.76378 6.69292C8.76358 6.69292 7.95276 7.50374 7.95276 8.50394C7.95276 9.50414 8.76358 10.315 9.76378 10.315Z" fill={color ? color : "black"}/>
        <path d="M16.2205 16.378C16.2205 14.9606 16.8504 14.0945 18.1102 14.0945C19.2126 14.0945 19.7638 14.8819 19.7638 16.378C19.7638 17.7953 19.7638 21.6535 19.7638 21.6535H22.8346C22.8346 21.6535 22.8346 18.0315 22.8346 15.2756C22.8346 12.5984 21.3386 11.2598 19.2126 11.2598C17.0866 11.2598 16.2205 12.9134 16.2205 12.9134V11.5748H13.2283V21.5748H16.2205C16.2205 21.6535 16.2205 17.9528 16.2205 16.378Z" fill={color ? color : "black"}/>
        </SvgIcon>
    )
}
export { LinkedInFooter, TumblrIcon, Youtube, TotalQuestions, FreeCircle, PeopleIcon, Clock, TwitterFooter, InstaFooter, FacebookFooter, GmailFooter, FreeIcon, LoginIcon, PenIcon }
