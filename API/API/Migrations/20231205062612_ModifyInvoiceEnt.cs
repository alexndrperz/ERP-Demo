using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ModifyInvoiceEnt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "hasItbis",
                table: "SubInvoices");

            migrationBuilder.AddColumn<decimal>(
                name: "price_unit",
                table: "SubInvoices",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "price_unit",
                table: "SubInvoices");

            migrationBuilder.AddColumn<bool>(
                name: "hasItbis",
                table: "SubInvoices",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
