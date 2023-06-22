import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:cached_network_image/cached_network_image.dart';

class ShoppingCartPage extends StatefulWidget {
  @override
  _ShoppingCartPageState createState() => _ShoppingCartPageState();
}

class _ShoppingCartPageState extends State<ShoppingCartPage> {
  List<dynamic> treatments = [];

  Future<void> fetchData() async {
    final response = await http.get(Uri.parse(
        'https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/treatments'));
    if (response.statusCode == 200) {
      final jsonData = jsonDecode(response.body);
      setState(() {
        treatments = jsonData['result'];
      });
    }
  }

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Shopping Cart'),
      ),
      body: ListView.builder(
        itemCount: treatments.length,
        itemBuilder: (context, index) {
          final treatment = treatments[index];
          return GestureDetector(
            onTap: () {
              _showTreatmentDetailsDialog(context, treatment);
            },
            child: ListTile(
              title: Text(treatment['title']),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(treatment['description']),
                  SizedBox(height: 8),
                  Text('Duration: ${treatment['duration']}'),
                  SizedBox(height: 8),
                  ElevatedButton(
                    onPressed: () {
                      // Handle buy button action here
                    },
                    child: Text('Buy'),
                  ),
                ],
              ),
              leading: CachedNetworkImage(
                imageUrl: treatment['image_url'],
                placeholder: (context, url) => CircularProgressIndicator(),
                errorWidget: (context, url, error) => Icon(Icons.error),
              ),
              trailing: Text(treatment['cost']),
            ),
          );
        },
      ),
    );
  }

  void _showTreatmentDetailsDialog(
      BuildContext context, Map<String, dynamic> treatment) {
    showDialog(
      context: context,
      builder: (BuildContext dialogContext) {
        return AlertDialog(
          title: Text(treatment['title']),
          content: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Category: ${treatment['category']}'),
              Text('Duration: ${treatment['duration']}'),
              Text('Description: ${treatment['treatment_notes']}'),
              Text('Availability: ${treatment['availability']}'),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(dialogContext).pop(); // Close the dialog
              },
              child: Text('Close'),
            ),
          ],
        );
      },
    );
  }
}
