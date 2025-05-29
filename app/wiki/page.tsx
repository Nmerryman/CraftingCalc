
export default function Main() {

    return (
        <div className='flex flex-col items-center h-screen'>
            Notes
            <div>
                Base items don&apos;t track properly because it&apos;s assumed that they&apos;re an unlimited resource.
            </div>
            <div>
                A preset generator exists at <a href="http://localhost:3000/presetGenerator">this page (Clickable)</a>. Make a script and paste the generated JSON into &apos;config - local presets input - load&apos;
            </div>
        </div>
    )
}