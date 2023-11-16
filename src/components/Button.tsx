interface ButtonProps {
    styling: 'primary' | 'secondary' | 'ghost' | 'dark';
    children: React.ReactNode; // Assuming 'children' will be used to pass content inside the button
}

const Button = (props: ButtonProps) => {
    const content = props.children
    const styling = props.styling
    
    let buttonClass = 'bg-white text-black py-1.5 px-6 rounded-lg hover:bg-gray-300 transition';

    if (styling === 'secondary') {
        buttonClass = 'bg-slate-900 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition';
    } else if (styling === 'dark'){
        buttonClass = 'border border-transparent bg-black-100 text-white py-1.5 px-6 rounded-lg hover:border-slate-900 transition';
    } else if (styling === 'ghost'){
        buttonClass = 'transparent border border-zinc-600 text-white py-1.5 px-6 rounded-lg hover:bg-zinc-950 transition';
    }

    return (  
        <>
        <button className={buttonClass}>{content}</button>
        </>
    );
}


// Variants: Primary Secondary Dark Destructive Ghost(no bg) Icon WithIcon Loading Disabled
 
//  there should be the color prop and type prop
// color is dark, error, warning, success
// type is Primary, Secondarey(primary con menos opacidad) Ghost(no bg y border en hover) Icon WithIcon Loading Disabled

export default Button