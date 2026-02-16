

const iconMap = {

};

const MyIcons = ({
    name,
    size = 20,
    stroke,
    fill = 'none',
    style,
}) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`[MyIcons] Icon "${name}" not found`);
        return null;
    }

    return (
        <View style={style}>
            <IconComponent
                width={size}
                height={size}
                stroke={stroke || undefined}
                fill={fill}
            />
        </View>
    );
};

export { iconMap };
export default MyIcons;
