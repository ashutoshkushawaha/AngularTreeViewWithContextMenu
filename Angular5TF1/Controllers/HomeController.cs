using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular5TF1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }



        //public List<DivisionTree> GetDivisions()
        //{
        //    var result = _subplan.getAllDivisions();
        //    var divisionNodes = new List<DivisionTree>();
        //    var divisionNode = generateDivisionTree(result, divisionNodes, "00");
        //    return divisionNode;
        //}


        //private List<DivisionTree> generateDivisionTree(List<DivisionModels> model, List<DivisionTree> divisionNodes, string preDivisionCode)
        //{
        //    foreach (var division in model.Where(x => x.PRE_DIVISION_CODE == preDivisionCode))
        //    {
        //        var divisionNodesChild = new List<DivisionTree>();
        //        divisionNodes.Add(new DivisionTree()
        //        {
        //            Level = division.LEVEL,
        //            divisionName = division.DIVISION_EDESC,
        //            divisionId = division.DIVISION_CODE,
        //            masterDivisionCode = division.DIVISION_CODE,
        //            groupSkuFlag = division.GROUP_SKU_FLAG,
        //            preDivisionCode = division.PRE_DIVISION_CODE,
        //            hasDivisions = division.GROUP_SKU_FLAG == "G" ? true : false,
        //            children = division.GROUP_SKU_FLAG == "G" ? generateDivisionTree(model, divisionNodesChild, division.DIVISION_CODE) : null,
        //        });

        //    }
        //    return divisionNodes;
        //}
    }
}
