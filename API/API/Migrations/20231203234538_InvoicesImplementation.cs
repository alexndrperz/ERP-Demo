using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InvoicesImplementation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created_At = table.Column<DateTime>(type: "TEXT", nullable: false),
                    provider_id = table.Column<int>(type: "INTEGER", nullable: false),
                    subtotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    total = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Invoices_Providers_provider_id",
                        column: x => x.provider_id,
                        principalTable: "Providers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SubInvoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    invoice_id = table.Column<int>(type: "INTEGER", nullable: false),
                    product_id = table.Column<int>(type: "INTEGER", nullable: false),
                    quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    hasItbis = table.Column<bool>(type: "INTEGER", nullable: false),
                    subtotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    total = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubInvoices_Invoices_invoice_id",
                        column: x => x.invoice_id,
                        principalTable: "Invoices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SubInvoices_ProductsDefaults_product_id",
                        column: x => x.product_id,
                        principalTable: "ProductsDefaults",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Invoices_provider_id",
                table: "Invoices",
                column: "provider_id");

            migrationBuilder.CreateIndex(
                name: "IX_SubInvoices_invoice_id",
                table: "SubInvoices",
                column: "invoice_id");

            migrationBuilder.CreateIndex(
                name: "IX_SubInvoices_product_id",
                table: "SubInvoices",
                column: "product_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SubInvoices");

            migrationBuilder.DropTable(
                name: "Invoices");
        }
    }
}
