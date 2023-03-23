function FancyTwo(props) {
    return (
        <div className={'FancyTwo componentBox FancyTwo-' + props.width }>
            {props.children} {/* everything in between the opening <FancyBorder> and closing </FancyBorder> tags on lines 15-19 */}
        </div>
    );
}

export default FancyTwo