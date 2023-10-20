function snakeToCamel(snake) {
    return snake
				.toLowerCase()
				.replace(/_./g, letter => letter.charAt(1).toUpperCase());
}

function snakeToPascal(snake) {
    return snakeToCamel(snake)
                .replace(/^[a-z]/, letter => letter.toUpperCase());
}

function snakeToDescription(snake) {
    return snakeToPascal(snake)
                .replace(/([a-z])([A-Z])/g, "$1 $2");
}

const columns = `material_id
description
material_type
material_class_id
material_class_desc
material_group_name
material_warehouse
material_quantity
unit_code
data_state
time_key
event
event_time
event_user
event_comment
checkout_state
checkout_time
checkout_user
supply_type
salesyn
iqcyn
process_flow
inventoryyn
inventory_unit
inventory_min_qty
inventory_max_qty
tracking_type
vendor_code
sales_price
sales_min_qty
sales_max_qty
sales_unit_value
sales_currency
sales_unit_height
sales_unit_length
sales_unit_volume
sales_unit_weight
sales_unit_width
packing_unit
purchase_auto_order
purchase_currency
purchase_unit
purchase_vendor
purchase_price
purchase_min_qty
purchase_max_qty
purchase_default_qty
purchase_default_leadtime
purchaseavgleadtime
purchase_worst_leadtime
`.split(`
`)

columns.forEach(column => console.log(snakeToDescription(column)))