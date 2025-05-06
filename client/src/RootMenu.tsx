import LinkButton from "./Linkbutton";

function RootMenu() {
    return (
        <main
        //below className arranges the buttons on screen
            className='select-none auto-rows-fr'>
            <LinkButton
                link='/'
                className='rounded-lg border-2 bg-red-300'>
                these are
            </LinkButton>
            <LinkButton
                link='/Gatos'
                className='rounded-lg border-2 bg-blue-300'>
                page buttons
            </LinkButton>
          
            
        </main>
    );
}

export default RootMenu;