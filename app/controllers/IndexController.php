<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
        $query = $this->db->query('select * from clientes');

        $this->view->recordset = $query->fetchAll();
    }

}

