import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler(request) {

  const fontData = await fetch(
    new URL('../../public/fonts/Inter-Regular.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const fontDataBold = await fetch(
    new URL('../../public/fonts/Inter-SemiBold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());
  try {
    const { searchParams } = new URL(request.url);
  
      // ?title=<title>
      const hasTitle = searchParams.has('title');
      const title = hasTitle
        ? searchParams.get('title')?.slice(0, 125)
        : 'Advancing the Health Response to Human Trafficking & Exploitation';


    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            fontFamily: '"Inter"',
          }}
          tw="bg-[#AB0033] px-14 py-15 relative flex"
        >
          <div
            tw="text-white flex flex-col" 
          >
            <div tw="flex">
              <svg tw="flex" viewBox="0 0 150 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.664 48.407c.172.8.345.924.761.924.376 0 .549-.123.71-.924l5.298-23.08c.172-.712.376-1.014 1.137-1.014h1.392c.753 0 .923.468.792.972L83.579 51.01c-.294 1.26-1.176 1.424-2.099 1.424h-2.23c-.924 0-1.808-.164-2.103-1.424l-6.18-25.726c-.123-.502.039-.972.8-.972h1.471c.801 0 1.007.302 1.179 1.014l5.247 23.08ZM101.156 51.517c0 .63-.294.916-.924.916h-1.308c-.631 0-.922-.287-.922-.916V25.285c0-.627.293-.972.922-.972h1.308c.63 0 .924.343.924.972v26.232ZM124.82 24.315c.628 0 .967.302.967.93v1.086c0 .627-.337.921-.967.921h-5.796v24.263c0 .63-.293.916-.93.916h-1.298c-.63 0-.925-.287-.925-.916V27.252h-5.796c-.632 0-.975-.296-.975-.921v-1.087c0-.627.343-.929.975-.929h14.747-.002ZM140.841 24.315c1.007 0 1.726.302 2.018 1.431l7.105 25.733c.123.54-.049.958-.8.958h-1.388c-.753 0-1.009-.289-1.179-.958l-1.929-7.266h-9.793l-1.932 7.266c-.173.67-.383.958-1.178.958h-1.348c-.753 0-.963-.418-.799-.958l7.104-25.733c.293-1.127 1.013-1.43 2.018-1.43h2.101Zm-5.257 17.046h8.365l-3.445-13.013c-.21-.8-.333-.93-.709-.93-.425 0-.508.13-.762.93l-3.449 13.013ZM35.069 45.684c.01-1.317-.555-2.396-1.68-3.221a3.841 3.841 0 0 0-1.962-.527c-.293 0-.587.033-.876.102-1.348.311-2.536 1.311-3.534 2.971-2.53 4.212-6.54 7.778-9.45 9.71l-.046.03.375 1.169.081-.052c3.084-2 7.343-5.743 10.051-10.247.824-1.37 1.756-2.185 2.771-2.427a2.87 2.87 0 0 1 .638-.075c.7 0 1.196.269 1.284.319.792.58 1.173 1.312 1.167 2.24-.034 5.035-10.794 13.542-14.089 16.03l-.042.031.381 1.193.08-.062c3.473-2.585 14.81-11.464 14.849-17.182" fill="#FFFFFE"/><path d="M31.183 47.125c.007-.016.01-.027.013-.043a.585.585 0 1 0-1.025-.56.254.254 0 0 0-.044.06c-.791 1.445-3.946 6.58-11.322 12.017l-.042.03.38 1.187.08-.06c7.673-5.579 10.92-10.693 11.958-12.633" fill="#FFFFFE"/><path d="M38.398 45.315c0-3.735-3.283-6.912-7.173-6.94H31.2c-3.262 0-5.909 3.947-7.49 6.31l-.032.047c-.34.506-.632.94-.823 1.162-1.839 2.142-4.83 4.173-6.45 5.193l-.047.03.37 1.16.078-.048c1.385-.856 4.832-3.108 6.945-5.568.24-.28.543-.735.928-1.306l.016-.02c1.355-2.022 3.88-5.78 6.507-5.78h.019c3.253.021 5.999 2.66 5.999 5.76 0 1.958-.586 7.056-6.012 12.087-2.697 2.502-7.124 5.487-10.361 7.551l-.048.03.373 1.166.08-.05c3.342-2.12 7.924-5.202 10.759-7.831 5.765-5.35 6.387-10.84 6.387-12.953Z" fill="#FFFFFE"/><path d="M41.491 49.6c.566-3.414.78-7.797-2.638-11.409-1.737-1.834-4.587-2.929-7.626-2.929h-.253l-.015.05c-.104.314-.212.639-.318.971l-.067.208.106-.008c.189-.01.38-.015.572-.015 1.307 0 4.581.246 6.742 2.531 3.043 3.216 2.887 7.066 2.33 10.409-1.465 8.843-11.947 15.849-18.062 19.24l-.248.136h.447c.404.002 1.103-.002 1.99-.01h.02l.015-.01c5.722-3.35 15.532-10.292 17.005-19.164ZM22.112 42.863c1.66-2.398 2.983-3.81 5.05-5.397.65-.504 1.879-.863 3.281-.963l.094-.008-.381-1.183-.06.004c-1.525.146-2.825.577-3.655 1.212-2.176 1.673-3.563 3.154-5.301 5.664-1.345 1.938-4.592 4.5-5.867 5.373l-.044.03.372 1.16.079-.051c1.165-.733 4.909-3.64 6.432-5.84" fill="#FFFFFE"/><path d="M43.244 38.299c-.825-1.415-4.422-5.302-11.099-6.268l-.06-.01-.02.058-.343.985-.03.087.09.011c6.293.84 9.73 4.51 10.441 5.731 1.81 3.11 2.75 6.691 2.871 10.95l.014.422.13-.404c.282-.86.561-1.727.848-2.605l.004-.014v-.015c-.39-3.39-1.321-6.31-2.842-8.93M19.974 40.426c.033-.06 3.47-5.968 9.354-7.447l.077-.017-.36-1.125-.066.02c-6.391 1.636-9.981 7.9-10.016 7.961-.726 1.143-2.983 4.183-4.69 4.518l-.082.015.368 1.15.067-.017c2.492-.63 5.061-4.604 5.348-5.058Z" fill="#FFFFFE"/><path d="M46.443 37.262c-1.175-2.43-5.824-6.75-13.306-8l-.06-.01-.02.06c-.118.33-.238.654-.351.973l-.031.083.089.013c7.997 1.264 11.884 5.877 12.615 7.391 1.075 2.227 1.506 4.014 1.813 5.616l.053.283.09-.272c.207-.65.417-1.294.627-1.94l.006-.02-.006-.019a21.775 21.775 0 0 0-1.518-4.156M15.994 39.843l.296-.469c1.43-2.288 4.776-7.647 12.158-9.131l.08-.018-.36-1.127-.065.014c-7.807 1.62-11.314 7.239-12.814 9.639l-.29.458c-.767 1.192-1.176 1.55-1.605 1.927-.037.03-.073.063-.11.094l-.073.065.402 1.258.085-.086a8 8 0 0 1 .472-.443c.474-.415.965-.844 1.824-2.179" fill="#FFFFFE"/><path d="M27.539 27.45h.1l-.372-1.162h-.055c-7.126.266-12.645 7.803-14.17 10.105-.368.56-.663 1.04-.906 1.468l-.015.027.528 1.65.073-.2c.439-1.206 6.6-11.844 14.815-11.888" fill="#FFFFFE"/><path d="m16.664 28.098.008-.011.052-.06c2.707-2.358 8.856-2.86 10.062-2.937l.094-.005-.37-1.156-.057.004c-1.279.088-4.485.407-7.307 1.444 2.377-2.494 4.422-4.283 6.072-5.3l.05-.03-.371-1.155-.077.048c-5.03 2.962-12.052 11.866-14.086 14.524l-.02.03.44 1.376.083-.115c.254-.337 2.54-3.358 5.427-6.655M14.6 25.235c3.647-5.08 7.046-8.034 9.573-8.316l.088-.01-.373-1.173-.064.01c-3.603.57-7.526 5.102-10.184 8.802-1.377 1.918-3.158 3.31-4.41 4.137l-.048.03.37 1.164.08-.05c1.14-.721 3.304-2.279 4.966-4.593M12.762 22.644c3.126-4.662 8.29-7.908 10.367-9.087l.052-.03-.183-.566-.037-.014s-.264-.08-.703-.225l-.03-.011-.03.017c-1.451.84-4.24 2.61-6.878 5.13.714-1.988 1.864-4.594 3.43-6.32l.069-.078-.096-.038a72.23 72.23 0 0 1-1.006-.421l-.05-.021-.034.04c-2.587 3.066-4.008 8.149-4.181 8.785a22.924 22.924 0 0 0-1.67 2.183c-1.013 1.51-2.207 2.714-3.547 3.583l-.048.03.373 1.163.08-.049c1.074-.653 2.659-1.886 4.124-4.07M15.295 9.947l.015-.06-.054-.027a34.674 34.674 0 0 1-.932-.49l-.08-.042-.026.086c-.499 1.7-3.183 10.31-7.085 12.717l-.048.03.366 1.137.077-.044c4.28-2.43 7.027-10.8 7.767-13.307ZM11.582 7.685l-.039-.025c-.308-.202-.63-.41-.963-.627l-.1-.063-.013.115c-.164 1.368-.973 6.253-4.432 11.709l-.017.029.462 1.436.083-.127c3.698-5.514 4.74-10.51 5.015-12.404l.006-.049-.002.006ZM7.767 5.22v-.037l-.557-.365-.578-.385-.134-.088.019.157c.43 3.456-.888 8.06-1.712 10.5l-.008.024.597 1.852.073-.196c.763-2.033 2.517-7.222 2.3-11.459M4.46 2.989l-1.292-.864.015.154c.102 1.056.424 4.77.181 8.245v.015l.86 2.687.045-.308c.468-3.008.447-7.343.195-9.897L4.46 2.99ZM2.203 6.445c-.173-1.893-.252-4.206-.277-5.112v-.039l-.031-.02L.892.6.865.58.847.57C.422.284.164.11.164.11L0 0l.058.215c.004.02.01.035.015.054L.946 3V2.99l1.319 4.123-.064-.67h.002ZM34.048 26.689l-.058-.008-.019.056c-.121.344-.24.679-.356 1.002l-.031.09.098.008c1.19.086 11.755 1.079 15.505 9.404l.077.175.508-1.579-.015-.027c-4.164-7.671-13.816-8.946-15.71-9.123" fill="#FFFFFE"/><path d="M51.072 31.704c-4.385-5.462-13.434-7.256-16.102-7.677l-.061-.01-.385 1.137.086.013c1.874.296 8.341 1.52 12.915 4.83 1.246.903 2.27 1.915 3.04 3.007l.085.122.378-1.183.07-.21-.026-.03v.001ZM35.78 21.586l-.06-.007-.104.315c-.083.252-.168.502-.247.74l-.027.087.089.01c1.95.246 11.919 1.686 16.575 5.829l.085.077.035-.108c.111-.358.225-.715.337-1.056l.013-.046-.038-.03c-5.023-4.141-14.758-5.566-16.66-5.81" fill="#FFFFFE"/><path d="M54.64 20.31c-2.486-.582-6.183-.876-10.986-.876-.757 0-1.49.008-2.19.021l-.046-.015-.004.015c-2.174.039-3.99.127-5.017.185h-.05l-.104.327-.252.779-.035.102.108-.006c.748-.044 2.747-.152 5.25-.196.765.24 7.16 2.304 11.672 4.898l.081.048.027-.088c.112-.35.218-.681.32-1.008l.02-.058-.051-.028c-2.77-1.568-6.068-2.9-8.48-3.783 4.068.042 7.232.319 9.404.815l.066.014.056-.18.27-.875.02-.073-.075-.019h-.003ZM30.45 68.586l-.207.136h.25l1.84-.02h.02l.02-.016a43.769 43.769 0 0 0 9.943-9.841l.011-.021.651-2 .701-2.158-.326.534c-2.28 3.74-6.372 9.095-12.9 13.386M36.536 68.522l-.17.133.885-.01c.389-.003.728-.007 1.003-.011h.027l.02-.017c.388-.327.744-.648 1.168-1.031l.016-.014.244-.757c.123-.381.266-.822.43-1.318l.092-.288-.214.213a42.926 42.926 0 0 1-3.5 3.1Z" fill="#FFFFFE"/></svg>
            </div>
            
            <div tw="flex flex-wrap w-full mt-auto self-end max-w-[100%] mr-auto" style={{ fontFamily: '"Inter SemiBold"', }}>
              <div tw="flex bg-white text-[#AB0033] w-auto text-sm px-3 py-2 mb-3">VITA Foundation</div>
              <div tw="flex text-[6.5vw] w-full leading-none tracking-tight">{title}</div>
            </div>
          </div>

          <div tw="flex absolute top-0 right-[-5%] w-[650px] h-[670px] fill-black opacity-5">
              <svg tw="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 428 419"><g><path fill="url(#a)" d="M274.297 237.984c.075-10.323-4.338-18.777-13.135-25.243-1.099-.693-6.959-4.129-15.349-4.129-2.29 0-4.594.256-6.854.799-10.544 2.441-19.838 10.278-27.64 23.284-19.793 33.004-51.154 60.945-73.914 76.091l-.362.226 2.937 9.163.633-.407c24.116-15.674 57.435-45.001 78.614-80.296 6.447-10.73 13.737-17.12 21.675-19.019a22.406 22.406 0 0 1 4.986-.588c5.483 0 9.354 2.11 10.047 2.502 6.191 4.551 9.174 10.278 9.129 17.557-.272 39.455-84.429 106.112-110.201 125.613l-.332.241 2.983 9.344.632-.483C185.305 352.385 273.981 282.804 274.282 238"/><path fill="url(#b)" d="M243.9 249.272c.06-.12.075-.211.105-.331a4.615 4.615 0 0 0 .754-2.502 4.581 4.581 0 0 0-4.58-4.596 4.57 4.57 0 0 0-4.187 2.712 1.96 1.96 0 0 0-.346.467c-6.191 11.318-30.865 51.557-88.556 94.161l-.331.241 2.967 9.298.633-.467c60.011-43.719 85.407-83.792 93.526-98.998"/><path fill="url(#c)" d="M300.341 235.091c0-29.267-25.682-54.163-56.11-54.389h-.195c-25.517 0-46.214 30.939-58.58 49.446l-.256.377c-2.652 3.963-4.941 7.369-6.432 9.102-14.386 16.789-37.778 32.703-50.446 40.69l-.377.242 2.892 9.087.618-.377c10.83-6.706 37.793-24.354 54.317-43.629 1.883-2.2 4.248-5.757 7.26-10.233l.121-.165c10.604-15.839 30.352-45.287 50.898-45.287h.15c25.442.166 46.922 20.842 46.922 45.136 0 15.342-4.58 55.294-47.027 94.718-21.088 19.607-55.718 42.996-81.039 59.167l-.377.241 2.923 9.133.617-.392c26.15-16.608 61.984-40.766 84.157-61.367 45.099-41.926 49.964-84.938 49.964-101.5Z"/><path fill="url(#d)" d="M324.532 268.668c4.429-26.75 6.101-61.096-20.636-89.398-13.587-14.377-35.88-22.953-59.65-22.953h-1.973l-.12.392a661.163 661.163 0 0 0-2.486 7.611l-.527 1.628.829-.061a88.086 88.086 0 0 1 4.473-.12c10.228 0 35.835 1.929 52.736 19.832 23.799 25.198 22.579 55.369 18.226 81.562-11.463 69.294-93.451 124.196-141.276 150.765l-1.943 1.07h3.495c3.163.015 8.631-.015 15.575-.075h.15l.121-.076c44.752-26.252 121.483-80.657 133.006-150.177Z"/><path fill="url(#e)" d="M172.953 215.876c12.985-18.793 23.333-29.855 39.495-42.288 5.092-3.948 14.702-6.766 25.668-7.55l.738-.06-2.983-9.269-.467.03c-11.929 1.146-22.097 4.522-28.589 9.495-17.021 13.111-27.867 24.715-41.469 44.382-10.513 15.192-35.91 35.265-45.881 42.107l-.347.242 2.907 9.087.618-.407c9.113-5.742 38.395-28.513 50.31-45.754"/><path fill="url(#f)" d="M338.24 180.114c-6.447-11.092-34.585-41.55-86.808-49.115l-.467-.075-.166.452c-.889 2.547-1.778 5.109-2.681 7.716l-.226.678.693.09c49.225 6.586 76.113 35.341 81.671 44.911 14.159 24.369 21.51 52.43 22.459 85.796l.106 3.315 1.024-3.164c2.199-6.737 4.383-13.534 6.628-20.421l.03-.105v-.121c-3.058-26.554-10.334-49.446-22.233-69.972"/><path fill="url(#g)" d="M156.233 196.782c.256-.467 27.144-46.764 73.161-58.353l.603-.136-2.817-8.816-.512.151c-49.994 12.825-78.072 61.909-78.343 62.391-5.678 8.952-23.332 32.779-36.693 35.401l-.633.121 2.877 9.012.527-.136c19.492-4.943 39.586-36.079 41.83-39.635Z"/><path fill="url(#h)" d="M363.259 171.991c-9.188-19.049-45.55-52.898-104.07-62.693l-.467-.076-.166.467c-.919 2.592-1.852 5.124-2.741 7.626l-.241.648.693.106c62.556 9.901 92.953 46.055 98.677 57.915 8.406 17.452 11.78 31.453 14.175 44.006l.421 2.216.693-2.125c1.627-5.094 3.269-10.143 4.911-15.206l.045-.151-.045-.151c-2.952-11.529-6.718-21.867-11.87-32.567"/><path fill="url(#i)" d="m125.098 192.215 2.32-3.677c11.177-17.934 37.356-59.92 95.093-71.555l.632-.135-2.817-8.831-.512.105c-61.065 12.689-88.495 56.725-100.229 75.533l-2.274 3.587c-5.995 9.344-9.189 12.147-12.548 15.101-.286.241-.572.497-.858.738l-.573.513 3.148 9.856.663-.678a62.785 62.785 0 0 1 3.691-3.467c3.705-3.255 7.546-6.616 14.264-17.075"/><path fill="url(#j)" d="M215.401 95.101h.783L213.277 86h-.437c-55.733 2.08-98.903 61.141-110.833 79.18-2.877 4.385-5.182 8.153-7.08 11.499l-.12.211 4.127 12.93.572-1.567c3.435-9.449 51.621-92.804 115.88-93.15"/><path fill="url(#k)" d="m130.34 100.18.06-.091.407-.467c21.179-18.476 69.275-22.41 78.704-23.012l.738-.046-2.892-9.057-.452.03c-10.002.694-35.081 3.195-57.149 11.318 18.588-19.546 34.585-33.562 47.494-41.534l.392-.226-2.908-9.058-.602.377C154.787 51.623 99.868 121.4 83.962 142.227l-.167.241 3.45 10.775.648-.904c1.988-2.637 19.868-26.313 42.447-52.144"/><path fill="url(#l)" d="M114.193 77.74c28.529-39.801 55.115-62.95 74.878-65.165l.693-.075-2.923-9.193-.497.075c-28.183 4.476-58.866 39.982-79.653 68.978-10.77 15.025-24.703 25.936-34.494 32.416l-.377.242 2.893 9.117.632-.392c8.917-5.651 25.833-17.858 38.833-35.988"/><path fill="url(#m)" d="M99.823 57.44c24.447-36.53 64.846-61.97 81.084-71.208l.406-.226-1.431-4.446-.286-.105s-2.064-.633-5.498-1.764l-.241-.09-.226.136c-11.357 6.585-33.169 20.45-53.805 40.192 5.589-15.567 14.581-35.988 26.827-49.521l.543-.603-.754-.301a572.55 572.55 0 0 1-7.862-3.3l-.392-.167-.271.317c-20.23 24.022-31.346 63.854-32.702 68.842-4.82 5.606-9.219 11.363-13.06 17.105-7.923 11.83-17.262 21.264-27.746 28.076l-.376.241 2.922 9.103.618-.377c8.405-5.124 20.802-14.784 32.265-31.889"/><path fill="url(#n)" d="m119.63-42.055.121-.468-.422-.21a270.67 270.67 0 0 1-7.29-3.844l-.633-.331-.196.678c-3.901 13.322-24.899 80.793-55.417 99.646l-.376.241 2.862 8.907.602-.347c33.47-19.034 54.965-84.62 60.749-104.272Z"/><path fill="url(#o)" d="m90.589-59.778-.301-.196c-2.41-1.583-4.926-3.21-7.532-4.913l-.783-.498-.106.905c-1.28 10.715-7.606 48.994-34.66 91.749l-.135.226 3.615 11.258.648-.995c28.92-43.207 37.07-82.36 39.224-97.205l.045-.377-.015.046Z"/><path fill="url(#p)" d="M60.75-79.099v-.286l-4.354-2.863c-1.522-1.01-3.028-2.02-4.519-3.014l-1.054-.694.15 1.236c3.36 27.082-6.944 63.16-13.39 82.27l-.061.196 4.67 14.513.572-1.538c5.965-15.93 19.687-56.59 17.985-89.79"/><path fill="url(#q)" d="m34.886-96.58-10.107-6.767.12 1.206c.799 8.273 3.314 37.374 1.416 64.607v.12l6.718 21.054.362-2.412c3.66-23.57 3.494-57.539 1.521-77.552l-.03-.257Z"/><path fill="url(#r)" d="M17.232-69.499c-1.356-14.83-1.973-32.959-2.169-40.057v-.302l-.241-.165c-3.088-2.08-5.724-3.858-7.848-5.275l-.21-.151-.136-.09a1150.294 1150.294 0 0 1-5.348-3.602L0-120l.452 1.688c.03.151.075.271.12.422l6.824 21.385v-.06l10.318 32.31-.497-5.244h.015Z"/><path fill="url(#s)" d="m266.314 89.133-.452-.06-.151.437c-.949 2.698-1.883 5.32-2.786 7.852l-.241.708.768.06c9.309.678 91.944 8.455 121.272 73.695l.603 1.371 3.976-12.372-.12-.211c-32.567-60.117-108.062-70.108-122.884-71.495"/><path fill="url(#t)" d="M399.471 128.437c-34.299-42.8-105.08-56.86-125.942-60.161l-.482-.076-3.013 8.907.678.106c14.656 2.32 65.238 11.905 101.013 37.841 9.745 7.084 17.759 15.011 23.784 23.571l.663.949 2.952-9.268.542-1.643-.195-.241v.015Z"/><path fill="url(#u)" d="m279.855 49.151-.467-.06-.813 2.471c-.648 1.975-1.31 3.934-1.928 5.803l-.211.678.693.075c15.259 1.93 93.225 13.217 129.647 45.679l.663.603.271-.844a625.527 625.527 0 0 1 2.636-8.274l.106-.362-.302-.24C370.866 62.231 294.723 51.064 279.84 49.15"/><path fill="url(#v)" d="M427.382 39.144c-19.446-4.55-48.367-6.857-85.934-6.857-5.92 0-11.659.06-17.127.166l-.361-.12-.03.12c-17.006.301-31.211.995-39.239 1.447h-.392l-.813 2.562a914.44 914.44 0 0 0-1.974 6.103l-.271.8.844-.046c5.844-.347 21.48-1.19 41.061-1.537 5.98 1.884 56.005 18.054 91.297 38.384l.633.377.211-.693c.873-2.743 1.702-5.335 2.5-7.897l.151-.452-.392-.226c-21.66-12.283-47.463-22.727-66.322-29.644 31.813.332 56.561 2.502 73.552 6.39l.513.105.436-1.401c.799-2.607 1.507-4.883 2.109-6.857l.166-.573-.587-.15h-.031Z"/><path fill="url(#w)" d="m238.176 417.444-1.627 1.07h1.958c4.821-.06 9.656-.106 14.386-.166h.165l.151-.12c29.689-21.174 55.854-47.111 77.77-77.116l.091-.166c1.641-5.064 3.344-10.293 5.091-15.673l5.483-16.909-2.546 4.189c-17.834 29.297-49.843 71.269-100.907 104.891"/><path fill="url(#x)" d="m285.775 416.947-1.325 1.039 6.914-.075c3.042-.03 5.693-.06 7.847-.09h.211l.151-.136c3.043-2.562 5.829-5.079 9.143-8.078l.121-.105 1.913-5.938c.964-2.984 2.078-6.435 3.359-10.323l.723-2.261-1.672 1.673c-8.496 8.424-17.699 16.593-27.385 24.294Z"/></g><defs><linearGradient id="a" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="b" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="c" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="d" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="e" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="f" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="g" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="h" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="i" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="j" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="k" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="l" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="m" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="n" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="o" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="p" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="q" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="r" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="s" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="t" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="u" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="v" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="w" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient><linearGradient id="x" x1="214" x2="214" y1="-120" y2="419" gradientUnits="userSpaceOnUse"><stop stopColor="#000000"/><stop offset="1" stopColor="#000000"/></linearGradient></defs></svg>
            </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'regular',
          }, {
            name: 'Inter SemiBold',
            data: fontDataBold,
            style: 'bold',
          },
        ],

      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}