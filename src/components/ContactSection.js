import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="bg-grey-linear">
      {/* Barrette haute */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-10 lg:px-12 xl:px-24 py-0">
        <div className="h-1 w-full bg-divider-white"></div>
      </section>
{/* Barrette basse */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-10 lg:px-12 xl:px-24 py-0">
        <div className="h-1 w-full bg-divider-dark"></div>
      </section>
      {/* Section principale */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-10 lg:px-12 xl:px-24 py-12 md:py-20">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* Colonne de gauche : texte + réseaux sociaux */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-white heading-4">Restons en contact</h4>
              <div className="text-neutral-200">
                <p>Retrouvez toutes nos annonces sur notre blog.</p>
                <p>
                  Contact presse:{' '}
                  <a
                    className="text-neutral-200 typo-body-highlight"
                    href="mailto:media@ledger.com"
                  >
                    media@ledger.com
                  </a>
                </p>
              </div>
            </div>

            {/* Barres d’icônes de réseaux sociaux */}
            <ul className="flex flex-wrap gap-2" data-testid="social-bar__links">
              {/* GitHub */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://github.com/LedgerHQ"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M24.0149 6C14.0531 6 6 14.25 6 24.4563C6 32.6148 11.1599 39.5207 18.3181 41.965C19.213 42.1487 19.5409 41.5679 19.5409 41.0792C19.5409 40.6514 19.5114 39.1847 19.5114 37.6566C14.5 38.7569 13.4565 35.4565 13.4565 35.4565C12.6511 33.3175 11.4579 32.7678 11.4579 32.7678C9.81766 31.6371 11.5773 31.6371 11.5773 31.6371C13.3967 31.7594 14.3514 33.5316 14.3514 33.5316C15.9618 36.3426 18.5567 35.5484 19.6006 35.0594C19.7496 33.8676 20.2271 33.0426 20.7341 32.5844C16.7373 32.1565 12.532 30.5676 12.532 23.4783C12.532 21.4616 13.2474 19.8116 14.3809 18.5283C14.2021 18.0701 13.5756 16.1752 14.5602 13.6391C14.5602 13.6391 16.0812 13.1501 19.511 15.5336C20.9794 15.1296 22.4937 14.9241 24.0149 14.9223C25.536 14.9223 27.0866 15.1365 28.5184 15.5336C31.9485 13.1501 33.4696 13.6391 33.4696 13.6391C34.4542 16.1752 33.8273 18.0701 33.6485 18.5283C34.8119 19.8116 35.4978 21.4616 35.4978 23.4783C35.4978 30.5676 31.2925 32.1258 27.2658 32.5844C27.9222 33.1649 28.4886 34.2648 28.4886 36.0066C28.4886 38.4816 28.4591 40.468 28.4591 41.0789C28.4591 41.5679 28.7873 42.1487 29.6818 41.9654C36.84 39.5204 41.9999 32.6148 41.9999 24.4563C42.0294 14.25 33.9468 6 24.0149 6Z"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://www.facebook.com/Ledger"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M42 24.1119C42 14.114 33.9361 6 24 6C14.0639 6 6 14.114 6 24.1119C6 33.1586 12.5808 40.657 21.2008 42V29.3347H16.6035V24.1119H21.2008V20.1202C21.2008 15.5876 23.8702 13.0694 27.9856 13.0694C29.9506 13.0694 31.9897 13.4425 31.9897 13.4425V17.8632H29.7281C27.4851 17.8632 26.7806 19.2808 26.7806 20.6984V24.0933H31.7858L30.9887 29.3161H26.7806V41.9813C35.4191 40.657 42 33.1586 42 24.1119Z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://www.instagram.com/ledger"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M16.5453 6.12589C14.63 6.21625 13.3221 6.52189 12.1788 6.97117C10.9954 7.43233 9.99247 8.05117 8.99454 9.0527C7.99661 10.0542 7.38208 11.0579 6.92416 12.243C6.48099 13.3889 6.18075 14.6979 6.09615 16.6142C6.01155 18.5305 5.99283 19.1464 6.00219 24.0345C6.01155 28.9226 6.03315 29.5353 6.12603 31.4556C6.21747 33.3704 6.52203 34.6779 6.97132 35.8217C7.4332 37.005 8.05133 38.0076 9.05322 39.0059C10.0551 40.0042 11.0581 40.6172 12.2461 41.0759C13.3909 41.5183 14.7002 41.82 16.6162 41.9039C18.5321 41.9878 19.1488 42.0072 24.0355 41.9979C28.9222 41.9885 29.5374 41.9669 31.4573 41.8758C33.3772 41.7847 34.6779 41.478 35.822 41.0309C37.0053 40.5679 38.0087 39.9509 39.0062 38.9486C40.0038 37.9464 40.618 36.942 41.0755 35.7562C41.5191 34.6113 41.8204 33.302 41.9035 31.3875C41.9874 29.4662 42.0072 28.8528 41.9979 23.9654C41.9885 19.078 41.9666 18.4653 41.8755 16.5458C41.7844 14.6262 41.4795 13.3227 41.0305 12.1782C40.5679 10.9949 39.9505 9.99302 38.949 8.99402C37.9475 7.99501 36.9423 7.38121 35.7568 6.92473C34.6113 6.48157 33.3027 6.17953 31.3868 6.09673C29.4708 6.01393 28.8541 5.99269 23.9657 6.00205C19.0772 6.01141 18.4652 6.03229 16.5453 6.12589ZM16.7555 38.6657C15.0005 38.5894 14.0476 38.2978 13.4125 38.0537C12.5715 37.7297 11.9725 37.338 11.3396 36.7112C10.7067 36.0845 10.3179 35.4833 9.98959 34.6441C9.74299 34.0091 9.44598 33.0572 9.3639 31.3022C9.27462 29.4054 9.2559 28.8358 9.24546 24.0302C9.23502 19.2245 9.25338 18.6557 9.33654 16.7582C9.41142 15.0046 9.70483 14.0506 9.94855 13.4159C10.2726 12.5739 10.6628 11.9759 11.291 11.3434C11.9192 10.7109 12.5186 10.3213 13.3585 9.99302C13.9928 9.74534 14.9447 9.45086 16.699 9.36734C18.5973 9.27734 19.1661 9.25934 23.9711 9.2489C28.776 9.23846 29.3463 9.25646 31.2453 9.33998C32.9989 9.4163 33.9532 9.70682 34.5872 9.95198C35.4285 10.276 36.0272 10.6651 36.6597 11.2944C37.2923 11.9237 37.6821 12.521 38.0105 13.3626C38.2585 13.9952 38.553 14.9466 38.6358 16.702C38.7262 18.6003 38.7467 19.1695 38.7553 23.974C38.764 28.7786 38.747 29.3492 38.6639 31.2461C38.5872 33.0011 38.2963 33.9543 38.0519 34.5901C37.7279 35.4307 37.3373 36.0301 36.7087 36.6623C36.0801 37.2944 35.4814 37.684 34.6412 38.0123C34.0076 38.2596 33.0547 38.5548 31.3018 38.6383C29.4035 38.7276 28.8347 38.7463 24.0279 38.7568C19.2212 38.7672 18.6542 38.7478 16.7559 38.6657M31.4296 14.3796C31.4303 14.8069 31.5577 15.2243 31.7957 15.5791C32.0337 15.934 32.3715 16.2103 32.7665 16.3731C33.1615 16.5359 33.5959 16.5779 34.0148 16.4938C34.4337 16.4097 34.8182 16.2032 35.1198 15.9006C35.4213 15.5979 35.6264 15.2126 35.7089 14.7935C35.7915 14.3743 35.7479 13.94 35.5836 13.5456C35.4194 13.1512 35.1419 12.8144 34.7862 12.5777C34.4304 12.341 34.0125 12.2152 33.5853 12.216C33.0126 12.2172 32.4637 12.4457 32.0595 12.8515C31.6552 13.2572 31.4286 13.8069 31.4296 14.3796Z"></path>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>

              {/* X (Twitter) */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="X"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://x.com/Ledger"
                >
                  <svg
                    className="fill-white"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="white"
                    strokeWidth="2.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.5446 8.77491L17.501 2H16.0895L10.9176 7.88256L6.78683 2H2.02246L8.26902 10.8955L2.02246 18H3.43401L8.89567 11.7878L13.2581 18H18.0225L11.5443 8.77491H11.5446ZM9.61133 10.9738L8.97842 10.0881L3.94261 3.03974H6.11066L10.1746 8.72795L10.8075 9.61374L16.0902 17.0075H13.9221L9.61133 10.9742V10.9738Z"></path>
                  </svg>
                  <span className="sr-only">X</span>
                </a>
              </li>

              {/* YouTube */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://www.youtube.com/Ledger"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M38.0675 11.7766C39.6174 12.2046 40.8354 13.4612 41.2502 15.0602H41.2473C42 17.9556 42 24 42 24C42 24 42 30.0444 41.2473 32.9398C40.8324 34.5388 39.6144 35.7954 38.0645 36.2234C35.2581 37 24 37 24 37C24 37 12.7419 37 9.93546 36.2234C8.38558 35.7954 7.1676 34.5388 6.75272 32.9398C6 30.0444 6 24 6 24C6 24 6 17.9556 6.75272 15.0602C7.1676 13.4612 8.38558 12.2046 9.93546 11.7766C12.7419 11 24 11 24 11C24 11 35.2581 11 38.0675 11.7766ZM29.755 24L20.3994 18.4295V29.5706L29.755 24Z"></path>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://www.linkedin.com/company/ledgerhq"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M38 42H10C7.79086 42 6 40.2091 6 38V10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42ZM31.6577 37.0001H36.9999V26.0257C36.9999 21.3823 34.3677 19.1372 30.6912 19.1372C27.0129 19.1372 25.4649 22.0015 25.4649 22.0015V19.6667H20.3165V37.0001H25.4649V27.9011C25.4649 25.4631 26.5872 24.0123 28.7352 24.0123C30.7098 24.0123 31.6577 25.4064 31.6577 27.9011V37.0001ZM10.9999 14.1986C10.9999 15.9649 12.4209 17.3971 14.1746 17.3971C15.9282 17.3971 17.3484 15.9649 17.3484 14.1986C17.3484 12.4322 15.9282 11.0001 14.1746 11.0001C12.4209 11.0001 10.9999 12.4322 10.9999 14.1986ZM16.8846 37.0001H11.5162V19.6667H16.8846V37.0001Z"></path>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>

              {/* TikTok */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="TikTok"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://www.tiktok.com/@ledger"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M35.2204 13.216C33.2439 11.9513 31.817 9.92867 31.3722 7.57063C31.276 7.06091 31.2233 6.53677 31.2233 6H24.9144L24.904 30.8042C24.798 33.5818 22.468 35.8113 19.611 35.8113C18.7232 35.8113 17.8869 35.5937 17.1511 35.2132C15.4631 34.3416 14.3082 32.6057 14.3082 30.6083C14.3082 27.7393 16.6873 25.4053 19.611 25.4053C20.1569 25.4053 20.6802 25.4937 21.1758 25.6458V19.3272C20.663 19.2587 20.1422 19.216 19.611 19.216C13.2091 19.2166 8 24.327 8 30.6083C8 34.4624 9.96305 37.873 12.9572 39.9353C14.8431 41.2342 17.1376 42 19.6116 42C26.0142 42 31.2233 36.8896 31.2233 30.6083V18.0307C33.6973 19.7732 36.7289 20.7998 40 20.7998V14.6105C38.2379 14.6105 36.5965 14.0966 35.2204 13.216Z"></path>
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
              </li>

              {/* Discord */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                  className="block rounded-full bg-white/5 p-3 transition-all duration-300 ease-in-out hover:bg-white/10"
                  href="https://developers.ledger.com/discord-pro"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white"
                  >
                    <path d="M37.8838 12.345C35.2558 11.2337 32.4814 10.4453 29.6315 10C29.2415 10.6439 28.8887 11.3064 28.5744 11.9846C25.5387 11.5621 22.4517 11.5621 19.416 11.9846C19.1016 11.3064 18.7487 10.644 18.3589 10C15.5072 10.4491 12.731 11.2393 10.1003 12.3508C4.87774 19.4873 3.46198 26.4467 4.16986 33.3072C7.22833 35.3943 10.6516 36.9815 14.291 38C15.1104 36.982 15.8356 35.9021 16.4587 34.7717C15.2752 34.3634 14.1329 33.8598 13.0451 33.2665C13.3314 33.0747 13.6114 32.8771 13.882 32.6853C17.0473 34.0602 20.5021 34.773 23.9999 34.773C27.4978 34.773 30.9526 34.0602 34.1179 32.6853C34.3916 32.8917 34.6716 33.0892 34.9548 33.2665C33.8648 33.8607 32.7205 34.3654 31.5349 34.7746C32.1572 35.9045 32.8824 36.9835 33.7026 38C37.345 36.9856 40.771 35.3991 43.83 33.3101C44.6606 25.3541 42.4111 18.4587 37.8838 12.345ZM17.3553 29.088C15.3827 29.088 13.753 27.4346 13.753 25.4006C13.753 23.3665 15.326 21.6986 17.349 21.6986C19.372 21.6986 20.9891 23.3665 20.9545 25.4006C20.9199 27.4346 19.3657 29.088 17.3553 29.088ZM30.6446 29.088C28.6688 29.088 27.0454 27.4346 27.0454 25.4006C27.0454 23.3665 28.6185 21.6986 30.6446 21.6986C32.6707 21.6986 34.2752 23.3665 34.2406 25.4006C34.206 27.4346 32.6549 29.088 30.6446 29.088Z"></path>
                  </svg>
                  <span className="sr-only">Discord</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne de droite : Newsletter */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white heading-4">Abonnez-vous à notre newsletter</h4>
            <p className="text-neutral-200">
              Recevez nos derniers articles de blog, offres exclusives et nouvelles
              cryptos prises en charge directement par email.
            </p>
            
            {/* Formulaire Eloqua */}
            <form
              className="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2"
              action="https://s1909208.t.eloqua.com/e/f2"
              target="_blank"
              method="POST"
              name="UntitledForm-1664173584588"
              data-testid="eloqua-form"
            >
              {/* Champ email */}
              <div className="flex h-fit w-full">
                <input
                  data-cs-mask="true"
                  placeholder="Votre adresse email"
                  type="email"
                  className="w-full cursor-pointer appearance-none rounded-full border border-neutral-600 bg-transparent px-6 py-3 leading-tight text-white placeholder-white transition-all duration-300 ease-in-out typo-caption hover:border-white"
                  required
                  name="M14KZX"
                  size="22"
                  data-testid="eloqua-input-email"
                />
                <input
                  type="hidden"
                  name="elqFormName"
                  data-testid="eloqua-input-formName"
                  value="UntitledForm-1664173584588"
                />
                <input
                  type="hidden"
                  name="elqSiteID"
                  data-testid="eloqua-input-siteId"
                  value="1909208"
                />
                <input
                  type="hidden"
                  name="8L9GGC"
                  data-testid="eloqua-input-8L9GGC"
                  value="newsletter"
                />
                <input
                  type="hidden"
                  name="RRW624"
                  data-testid="eloqua-input-RRW624"
                  value="fr"
                />
                <input
                  type="hidden"
                  name="NKF1L1"
                  data-testid="eloqua-input-NKF1L1"
                  value="1"
                />
              </div>

              {/* Bouton de soumission */}
              <div className="flex h-fit w-full">
                <button
                  type="submit"
                  className="group flex items-center justify-center  rounded-full w-fit transition-all focus:outline-none typo-caption px-6 bg-white focus:ring-primary focus:ring-inset focus:ring-2"
                  data-testid="newsletter-button"
                >
                  <div className='buttoncursor'>
                  <span className="whitespace-nowrap text text-black group-hover:text-neutral-700">
                    S'inscrire à la newsletter
                  </span></div>
                  <span
                    data-testid="button__icon"
                    className="transition-all group-hover:translate-x-2 group-hover:transform"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      fill="none"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rtl:rotate stroke-black"
                    >
                      <path d="M38 24H10M38 24L28 34M38 24L28 14"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Barrette basse */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-10 lg:px-12 xl:px-24 py-0">
        <div className="h-1 w-full bg-divider-dark bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </section>
    </div>
  );
};

export default ContactSection;