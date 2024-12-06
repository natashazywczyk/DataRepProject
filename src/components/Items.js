import ListItem from './ListItem';

function Items(props) {
    //Pass all necessary data from ListItem to Items and render components
    return (
        <>
            {props.mywishes.map((wish) => (
                <ListItem
                    mywishes={wish}
                    key={wish._id}
                    Reload={props.ReloadData} //handles reload function
                />
            ))}
        </>
    );
}

export default Items;