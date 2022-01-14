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

    /** Icon Color */
    $optionContainer = array( 'id' => 'option_design_icon_color' );
    ob_start();
    $this->Form->text( 'fab_design[template][icons][color]', array(
        'id' => $optionContainer['id'],
        'class' => array('input' => 'field_option_design_template_color colorpicker'),
        'value' => isset( $fab_design->template->icons->color ) ? $fab_design->template->icons->color : '#fff',
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Color' )
    ));

    $this->Form->Heading('Layout');

    /** Layout - Position */
    $optionContainer = array( 'id' => 'option_design_layout_position' );
    ob_start();
    $this->Form->select( 'fab_design[layout][position]', array(), array(
        'id' => $optionContainer['id'],
        'class' => array('input' => 'select2 field_option_design_layout_position'),
        'value' => isset( $fab_design->layout->position ) ? $fab_design->layout->position : 'left',
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Position' )
    ));

    $this->Form->Heading('Template');

    /** Template - Name */
    $optionContainer = array( 'id' => 'option_design_template_name' );
    ob_start();
    $this->Form->select( 'fab_design[template][name]', array(), array(
        'id' => $optionContainer['id'],
        'class' => array('input' => 'select2 field_option_design_template_name'),
        'value' => isset( $fab_design->template->name ) ? $fab_design->template->name : 'classic',
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Name' )
    ));

    /** Template - Shape */
    $optionContainer = array( 'id' => 'option_design_template_shape' );
    ob_start();
    $this->Form->select( 'fab_design[template][shape]', array(), array(
        'id' => $optionContainer['id'],
        'class' => array('input' => 'select2 field_option_design_template_shape'),
        'value' => isset( $fab_design->template->shape ) ? $fab_design->template->shape : 'none',
    ));
    $this->Form->container( 'setting', ob_get_clean(), array(
        'label' => array( 'id' => $optionContainer['id'] , 'text' => 'Shape' ),
        'info' => 'Please refer to <code><a href="https://bennettfeely.com/clippy/" target="_blank">Clippy</a></code> to see the shape'
    ));

?>
