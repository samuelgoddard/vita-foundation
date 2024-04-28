import Container from "@/components/container";
import Form from "@/components/form";
import Pill from "@/components/pill";
import Link from "next/link";

export default function BookCta() {
  return(
    <section className="relative" id="contact">
      <svg className="z-0 hidden md:block md:w-[65%] md:max-w-[500px] xl:w-[45%] xl:max-w-[800px] absolute top-0 left-0 right-0 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 730 914"><g opacity=".3"><path fill="url(#a)" d="M441.158 621.576c.14-19.222-8.084-34.965-24.477-47.003-2.049-1.291-12.969-7.689-28.604-7.689-4.266 0-8.561.477-12.772 1.487-19.649 4.546-36.968 19.138-51.509 43.355-36.884 61.455-95.326 113.481-137.74 141.683l-.674.421 5.474 17.062 1.179-.758c44.94-29.184 107.032-83.792 146.498-149.512 12.014-19.98 25.6-31.878 40.393-35.414 3.06-.702 6.204-1.094 9.292-1.094 10.217 0 17.431 3.928 18.722 4.658 11.537 8.474 17.095 19.138 17.011 32.692-.505 73.465-157.333 197.581-205.362 233.893l-.617.449 5.558 17.398 1.179-.898c50.61-37.714 215.859-167.275 216.421-250.702"/><path fill="url(#b)" d="M384.512 642.594c.113-.225.141-.393.197-.617.87-1.347 1.403-2.947 1.403-4.659 0-4.742-3.817-8.558-8.533-8.558a8.516 8.516 0 0 0-7.804 5.051 3.676 3.676 0 0 0-.645.87c-11.537 21.074-57.516 95.998-165.025 175.329l-.617.449 5.53 17.314 1.179-.87c111.831-81.407 159.157-156.023 174.287-184.337"/><path fill="url(#c)" d="M489.691 616.188c0-54.496-47.859-100.854-104.561-101.274h-.365c-47.551 0-86.119 57.61-109.165 92.07l-.477.701c-4.941 7.38-9.207 13.722-11.986 16.95-26.807 31.26-70.4 60.893-94.007 75.766l-.702.449 5.39 16.921 1.15-.701c20.183-12.488 70.428-45.348 101.221-81.239 3.509-4.097 7.916-10.719 13.53-19.054l.225-.308c19.761-29.493 56.561-84.326 94.849-84.326h.281c47.41.309 87.438 38.81 87.438 84.045 0 28.567-8.533 102.958-87.635 176.367-39.298 36.508-103.831 80.06-151.017 110.17l-.702.449 5.446 17.006 1.15-.73c48.73-30.924 115.509-75.907 156.828-114.267 84.043-78.067 93.109-158.155 93.109-188.995Z"/><path fill="url(#d)" d="M534.772 678.709c8.253-49.809 11.368-113.762-38.456-166.461-25.319-26.771-66.863-42.738-111.158-42.738h-3.677l-.225.73c-1.516 4.574-3.088 9.316-4.631 14.171l-.983 3.03 1.544-.112c2.751-.14 5.53-.225 8.337-.225 19.059 0 66.779 3.592 98.273 36.93 44.351 46.919 42.078 103.098 33.965 151.869C496.4 804.93 343.614 907.159 254.491 956.632l-3.621 1.992h6.512c5.895.028 16.085-.028 29.025-.14h.281l.224-.141c83.397-48.883 226.386-150.185 247.86-279.634Z"/><path fill="url(#e)" d="M252.302 580.409c24.196-34.992 43.48-55.59 73.6-78.741 9.487-7.352 27.396-12.599 47.831-14.058l1.376-.113-5.558-17.257-.87.056c-22.232 2.132-41.179 8.418-53.277 17.678-31.72 24.414-51.93 46.021-77.278 82.642-19.593 28.286-66.919 65.664-85.501 78.404l-.646.449 5.417 16.921 1.151-.757c16.983-10.692 71.551-53.093 93.755-85.195"/><path fill="url(#f)" d="M560.316 513.819c-12.014-20.653-64.449-77.366-161.769-91.453l-.87-.14-.309.842a7458.732 7458.732 0 0 0-4.996 14.367l-.421 1.263 1.291.169c91.733 12.262 141.839 65.804 152.197 83.623 26.386 45.376 40.084 97.627 41.852 159.755l.197 6.174 1.908-5.893c4.099-12.544 8.169-25.2 12.351-38.024l.057-.196v-.225c-5.699-49.444-19.257-92.07-41.432-130.29"/><path fill="url(#g)" d="M221.144 544.855c.477-.87 50.582-87.075 136.337-108.654l1.123-.253-5.25-16.416-.954.281c-93.165 23.88-145.488 115.277-145.993 116.175-10.582 16.668-43.481 61.034-68.379 65.917l-1.179.224 5.362 16.781.982-.253c36.323-9.204 73.768-67.179 77.951-73.802Z"/><path fill="url(#h)" d="M606.94 498.694c-17.122-35.47-84.884-98.496-193.936-116.736l-.871-.141-.308.87c-1.713 4.827-3.453 9.541-5.109 14.199l-.449 1.207 1.291.196c116.575 18.437 173.221 85.757 183.888 107.841 15.663 32.496 21.95 58.565 26.414 81.94l.786 4.125 1.291-3.956c3.031-9.485 6.091-18.886 9.151-28.315l.084-.28-.084-.281c-5.502-21.467-12.52-40.717-22.12-60.641"/><path fill="url(#i)" d="m163.123 536.353 4.323-6.847c20.828-33.394 69.614-111.573 177.207-133.237l1.179-.253-5.25-16.444-.954.197c-113.796 23.628-164.912 105.624-186.779 140.645l-4.238 6.678c-11.172 17.399-17.123 22.618-23.383 28.118-.533.449-1.067.926-1.6 1.375l-1.067.954 5.867 18.352 1.235-1.262c2.19-2.245 4.407-4.294 6.877-6.455 6.906-6.061 14.064-12.319 26.583-31.793"/><path fill="url(#j)" d="M331.404 355.524h1.459l-5.417-16.95h-.814c-103.86 3.873-184.309 113.846-206.541 147.436-5.361 8.166-9.656 15.181-13.193 21.411l-.224.393 7.691 24.077 1.067-2.919c6.4-17.594 96.196-172.803 215.943-173.448"/><path fill="url(#k)" d="m172.891 364.98.113-.168.757-.87c39.467-34.404 129.095-41.728 146.667-42.85l1.376-.084-5.39-16.865-.842.056c-18.639 1.291-65.376 5.949-106.498 21.074 34.638-36.396 64.449-62.493 88.505-77.338l.73-.421-5.418-16.865-1.123.702c-73.319 43.215-175.663 173.14-205.305 211.921l-.309.449 6.428 20.064 1.208-1.683c3.705-4.911 37.024-48.996 79.101-97.094"/><path fill="url(#l)" d="M142.8 323.197c53.165-74.111 102.709-117.214 139.537-121.339l1.291-.14-5.446-17.118-.926.141c-52.519 8.334-109.698 74.447-148.435 128.438-20.07 27.977-46.035 48.294-64.28 60.36l-.702.449 5.39 16.977 1.178-.729c16.618-10.523 48.14-33.253 72.365-67.011"/><path fill="url(#m)" d="M116.021 285.398c45.558-68.022 120.842-115.39 151.102-132.592l.758-.421-2.667-8.278-.533-.196s-3.846-1.179-10.246-3.283l-.449-.169-.421.253c-21.165 12.263-61.811 38.079-100.267 74.84 10.414-28.987 27.172-67.011 49.993-92.21l1.011-1.123-1.404-.561a1051.38 1051.38 0 0 1-14.652-6.146l-.73-.308-.505.589c-37.699 44.73-58.415 118.897-60.941 128.186-8.982 10.439-17.179 21.158-24.337 31.85-14.765 22.028-32.168 39.595-51.705 52.278l-.702.449 5.446 16.95 1.15-.702c15.664-9.541 38.766-27.528 60.127-59.378"/><path fill="url(#n)" d="m152.933 100.135.225-.87-.786-.393a503.909 503.909 0 0 1-13.586-7.156l-1.179-.617-.365 1.263c-7.27 24.806-46.4 150.438-103.27 185.543l-.702.449 5.333 16.585 1.123-.646c62.372-35.442 102.428-157.566 113.207-194.158Z"/><path fill="url(#o)" d="m98.814 67.134-.561-.365c-4.492-2.946-9.18-5.977-14.035-9.148l-1.46-.926-.197 1.684c-2.386 19.952-14.175 91.228-64.59 170.839l-.252.421 6.737 20.962 1.207-1.852c53.895-80.453 69.08-153.357 73.095-180.997l.084-.702-.028.084Z"/><path fill="url(#p)" d="M43.207 31.16v-.534l-8.112-5.332c-2.835-1.88-5.642-3.76-8.421-5.612l-1.965-1.29.28 2.3C31.25 71.12 12.05 138.3.035 173.881l-.112.364 8.702 27.024 1.066-2.863c11.116-29.661 36.688-105.37 33.516-167.19"/><path fill="url(#q)" d="m-4.99-1.392-18.835-12.6.225 2.245c1.488 15.406 6.175 69.593 2.639 120.3v.225l12.519 39.202.674-4.49C-.948 99.601-1.256 36.35-4.933-.915l-.056-.477Z"/><path fill="url(#r)" d="M-37.888 49.035c-2.526-27.613-3.677-61.371-4.042-74.588v-.561l-.449-.31c-5.754-3.872-10.667-7.183-14.625-9.82l-.393-.281-.252-.169c-6.204-4.153-9.965-6.706-9.965-6.706L-70-45l.842 3.143c.056.28.14.505.225.786l12.716 39.82v-.113L-36.99 58.8l-.926-9.765h.028Z"/><path fill="url(#s)" d="m426.281 344.411-.842-.112-.281.814a3488.713 3488.713 0 0 1-5.193 14.62l-.449 1.319 1.431.112c17.348 1.263 171.341 15.742 225.993 137.221l1.123 2.554 7.411-23.039-.225-.393C594.561 365.57 453.874 346.965 426.253 344.383"/><path fill="url(#t)" d="M674.421 417.596c-63.916-79.695-195.817-105.877-234.695-112.022l-.898-.14-5.614 16.584 1.263.196c27.312 4.322 121.572 22.169 188.239 70.463 18.161 13.189 33.095 27.95 44.323 43.889l1.235 1.767 5.501-17.257 1.011-3.059-.365-.449v.028Z"/><path fill="url(#u)" d="m451.516 269.964-.87-.113-1.516 4.603c-1.207 3.676-2.442 7.324-3.593 10.803l-.393 1.263 1.291.14c28.435 3.592 173.726 24.61 241.6 85.055l1.235 1.123.505-1.572a1152.616 1152.616 0 0 1 4.913-15.406l.196-.673-.561-.449c-73.207-60.417-215.102-81.211-242.835-84.774"/><path fill="url(#v)" d="M726.435 251.331c-36.238-8.475-90.133-12.768-160.14-12.768-11.032 0-21.727.112-31.916.308l-.674-.224-.056.224a1934.265 1934.265 0 0 0-73.123 2.694h-.729l-1.516 4.771c-1.263 3.872-2.499 7.661-3.677 11.365l-.506 1.487 1.572-.084c10.891-.646 40.028-2.217 76.519-2.862 11.144 3.507 104.365 33.617 170.134 71.473l1.179.701.393-1.291c1.628-5.107 3.172-9.934 4.659-14.704l.281-.842-.73-.421c-40.365-22.87-88.449-42.317-123.593-55.197 59.285.617 105.404 4.658 137.067 11.898l.954.196.814-2.609c1.488-4.855 2.807-9.092 3.93-12.768l.309-1.067-1.095-.28h-.056Z"/><path fill="url(#w)" d="m373.846 955.734-3.032 1.992h3.649c8.983-.112 17.993-.196 26.807-.309h.309l.281-.224c55.326-39.427 104.084-87.721 144.926-143.591l.168-.309c3.06-9.429 6.232-19.166 9.488-29.184l10.218-31.485-4.744 7.801c-33.235 54.552-92.884 132.703-188.042 195.309"/><path fill="url(#x)" d="m462.547 954.808-2.47 1.936 12.884-.14c5.671-.057 10.611-.113 14.625-.169h.393l.281-.252c5.67-4.771 10.863-9.457 17.038-15.041l.225-.197 3.565-11.056c1.796-5.556 3.873-11.982 6.259-19.222l1.348-4.21-3.116 3.115c-15.832 15.687-32.983 30.896-51.032 45.236Z"/></g><defs><linearGradient id="a" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="b" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="c" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="d" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="e" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="f" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="g" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="h" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="i" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="j" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="k" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="l" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="m" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="n" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="o" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="p" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="q" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="r" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="s" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="t" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="u" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="v" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="w" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient><linearGradient id="x" x1="328.793" x2="328.793" y1="-45" y2="958.631" gradientUnits="userSpaceOnUse"><stop stopColor="#AB0033"/><stop offset="1" stopColor="#F5F2F1" stopOpacity="0"/></linearGradient></defs></svg>
      
      <Container className="flex flex-wrap py-10 md:py-16 xl:py-28 relative z-10">
        <div className="w-full md:w-[62%] xl:w-1/2 ml-auto">
          <Pill className="bg-red text-white mb-4 md:mb-6">Connect With Us</Pill>
                
          <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl leading-[1.125] w-full mb-5 md:mb-8 xl:mb-10">Book Now</h2>

          <div className="w-full mb-8 md:mb-12 xl:mb-16 max-w-[55ch] content">
            <p>We run our VITA Interactive Webinar sessions on Safeguarding Victims of Modern Slavery all year round. Please use the form below to book onto one of our upcoming courses.</p>

            <p>If you would like to arrange a bespoke training session for your team, organisation or Trust, or if you would simply like to know about future session dates, then please <Link href="/about#contact">contact us</Link>.</p>

            <p>VITA Training uses Ticket Tailor for all our online individual bookings. Ticket Tailor is an independent online booking platform that is fully verified and secure. If you experience any issues booking, please visit <a href="http://example.com">Ticket Tailor</a> directly.</p>
          </div>

          <Form />
        </div>
      </Container>
    </section>
  )
}