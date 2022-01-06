<?php

namespace Fab\Module;

! defined( 'WPINC ' ) or die;

/**
 * Plugin hooks in a backend
 * setComponent
 *
 * @package    Fab
 * @subpackage Fab/Controller
 */

use FAB\Plugin;
use Fab\View;

class FABModuleSearch extends FABModule {

    /**
     * Module construect
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
        $this->key         = 'module_search';
        $this->name        = 'Search';
        $this->description = 'Popup search';
    }

    /** Render Module */
    public function render(){
        $view = new View( Plugin::getInstance() );
        $view->setTemplate( 'frontend.blank' );
        $view->setSections(
            array(
                'Frontend.Module.search' => array(
                    'name'   => 'Shortcode',
                    'active' => true,
                ),
            )
        );
        $view->build();
    }

}