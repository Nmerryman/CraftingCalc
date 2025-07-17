
export default function Main() {

    return (
        <div className='flex flex-col items-center h-screen'>
            Notes
            <div>
                This is a work in progress. It&apos;s not finished yet, but it&apos;s usable.<br/>
            </div>
            <div>
                There are three different cursors to represent whether you can right, left, or right and left click on a hovered thing.<br/>
            </div>
            <div>
                Base items may not track properly because it&apos;s assumed that they&apos;re an unlimited resource.<br/>
            </div>
            <div>
                A preset generator exists at <a className="hover:underline" href="presetGenerator">this page (Clickable)</a>. Make a script and paste the generated JSON into &apos;config -&gt; local presets input -&gt; load&apos;
            </div>
            <div>
                A youtube video should be coming soon.
            </div>
        </div>
    )
}