<?php
/**
 * Backend Page Setting - FAB Design
 */
$fab_design = ( isset( $options->fab_design ) ) ?
    $options->fab_design : $this->Plugin->getConfig()->default->fab_design;


    /** Design Button */
    $this->Form->Heading('Button');

    /** Button Color */
    $optionContainer = array( 'id' => 'option_design_template_color' );
    ob_start();
        $this->Form->text( 'fab_design[template][color]', array(
            'id' => $optionContainer['id'],
            'class' => array('input' => 'field_option_design_template_color colorpicker'),
            'value' => isset( $fab_design->template->color ) ? $fab_design->template->color : '#5b59ec',
        ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Color' )
    ));

    /** Tooltip - Enable/Disable */
    $optionContainer = array( 'id' => 'option_design_tooltip' );
    ob_start();
    $this->Form->switch( 'fab_design[tooltip][enable]', array(
        'id' => $optionContainer['id'],
        'label' => array( 'text' => 'Enable/Disable' ),
        'value' => $fab_design->tooltip->enable,
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Tooltip' )
    ));

    $this->Form->Heading('Icon');

    /** Icon - Class */
    $optionContainer = array( 'id' => 'option_design_template_icon' );
    ob_start();
    $this->Form->text( 'fab_design[template][icons][class]', array(
        'id' => $optionContainer['id'],
        'value' => isset( $fab_design->template->icons->class ) ? $fab_design->template->icons->class : 'fas fa-ellipsis-h',
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Class' ),
        'info' => 'Please refer to <code><a href="https://fontawesome.com/v5.15/icons/" target="_blank">Font Awesome</a></code> to see the icon class'
    ));

?>

<div class="grid grid-cols-5 gap-4 py-4">
    <div class="font-medium text-gray-600 pt-2">
        <label for="field_option_design_template_color">Color</label>
    </div>
    <div class="col-span-4">
        <input type="text" id="field_option_design_template_color"
               name="fab_design[template][icons][color]"
               class="field_option_design_template_color colorpicker"
               value="<?php echo isset( $fab_design->template->icons->color ) ? esc_attr( $fab_design->template->icons->color ) : '#fff'; ?>">
    </div>
</div>

<!--Start: Layout-->
<h2 class="text-lg py-4 my-4 border-b border-gray-200">Layout</h2>
<div class="grid grid-cols-5 gap-4 py-4">
	<div class="font-medium text-gray-600 pt-2">
		<label for="field_option_design_layout_position">Position</label>
	</div>
	<div class="col-span-4">
		<select id="field_option_design_layout_position"
				name="fab_design[layout][position]"
				class="field_option_design_layout_position select2"
				data-selected="<?php echo isset( $fab_design->layout->position ) ? esc_attr( $fab_design->layout->position ) : ''; ?>">
		</select>
	</div>
</div>
<!--End: Layout-->

<h2 class="text-lg py-4 my-4 border-b border-gray-200">Template</h2>
<!--Start: Template-->
    <div class="grid grid-cols-5 gap-4 py-4">
        <div class="font-medium text-gray-600 pt-2">
            <label for="field_option_design_template_name">Name</label>
        </div>
        <div class="col-span-4">
            <select id="field_option_design_template_name"
                    name="fab_design[template][name]"
                    class="field_option_design_template_name select2"
                    data-selected="<?php echo isset( $fab_design->template->name ) ? esc_attr( $fab_design->template->name ) : 'classic'; ?>">
            </select>
        </div>
    </div>

    <div class="grid grid-cols-5 gap-4 py-4">
        <div class="font-medium text-gray-600 pt-2">
            <label for="field_option_design_template_shape">Shape</label>
        </div>
        <div class="col-span-4">
            <select id="field_option_design_template_shape"
                    name="fab_design[template][shape]"
                    class="field_option_design_template_shape select2"
                    data-selected="<?php echo isset( $fab_design->template->shape ) ? esc_attr( $fab_design->template->shape ) : 'none'; ?>">
            </select>
            <div class="text-gray-400 mt-2">
                <em class="field-info">
                    Please refer to
                    <code><a href="https://bennettfeely.com/clippy/" target="_blank">Clippy</a></code>
                    to see the shape
                </em>
            </div>
        </div>
    </div>
<!--End: Template-->
